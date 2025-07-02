<?php
require_once 'config.php';

// Require admin role
requireRole('admin');

$message = '';
$messageType = '';

// Handle form submissions
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Verify CSRF token
    if (!verifyCSRFToken($_POST['csrf_token'] ?? '')) {
        $message = 'Invalid form submission. Please try again.';
        $messageType = 'error';
    } else {
        $action = $_POST['action'] ?? '';
        
        switch ($action) {
            case 'create':
                handleCreateUser();
                break;
            case 'toggle_status':
                handleToggleStatus();
                break;
            case 'reset_password':
                handleResetPassword();
                break;
        }
    }
}

// Create new user
function handleCreateUser() {
    global $message, $messageType;
    
    $username = sanitizeInput($_POST['username'] ?? '');
    $email = sanitizeInput($_POST['email'] ?? '');
    $password = $_POST['password'] ?? '';
    $role = sanitizeInput($_POST['role'] ?? '');
    
    // Validation
    $errors = [];
    
    if (empty($username)) {
        $errors[] = 'Username is required.';
    } elseif (strlen($username) < 3 || strlen($username) > 50) {
        $errors[] = 'Username must be between 3 and 50 characters.';
    } elseif (!preg_match('/^[a-zA-Z0-9_]+$/', $username)) {
        $errors[] = 'Username can only contain letters, numbers, and underscores.';
    }
    
    if (empty($email)) {
        $errors[] = 'Email is required.';
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Invalid email format.';
    }
    
    if (empty($password)) {
        $errors[] = 'Password is required.';
    } elseif (strlen($password) < 6) {
        $errors[] = 'Password must be at least 6 characters.';
    }
    
    if (!in_array($role, ['tech', 'admin'])) {
        $errors[] = 'Invalid role selected.';
    }
    
    if (!empty($errors)) {
        $message = implode('<br>', $errors);
        $messageType = 'error';
        return;
    }
    
    try {
        $pdo = getDBConnection();
        
        // Check if username or email already exists
        $stmt = $pdo->prepare("SELECT COUNT(*) FROM users WHERE username = ? OR email = ?");
        $stmt->execute([$username, $email]);
        if ($stmt->fetchColumn() > 0) {
            $message = 'Username or email already exists.';
            $messageType = 'error';
            return;
        }
        
        // Create user
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
        $stmt = $pdo->prepare("
            INSERT INTO users (username, email, password, role) 
            VALUES (?, ?, ?, ?)
        ");
        $stmt->execute([$username, $email, $hashedPassword, $role]);
        
        $message = "User '$username' created successfully.";
        $messageType = 'success';
        
        // Log activity
        logActivity($_SESSION['user_id'], 'user_created', "Created user: $username");
        
    } catch (PDOException $e) {
        error_log("User creation error: " . $e->getMessage());
        $message = 'Error creating user. Please try again.';
        $messageType = 'error';
    }
}

// Toggle user status
function handleToggleStatus() {
    global $message, $messageType;
    
    $userId = intval($_POST['user_id'] ?? 0);
    
    if ($userId <= 0) {
        $message = 'Invalid user ID.';
        $messageType = 'error';
        return;
    }
    
    // Prevent admin from deactivating themselves
    if ($userId == $_SESSION['user_id']) {
        $message = 'You cannot deactivate your own account.';
        $messageType = 'error';
        return;
    }
    
    try {
        $pdo = getDBConnection();
        
        // Get current status
        $stmt = $pdo->prepare("SELECT username, is_active FROM users WHERE id = ?");
        $stmt->execute([$userId]);
        $user = $stmt->fetch();
        
        if (!$user) {
            $message = 'User not found.';
            $messageType = 'error';
            return;
        }
        
        // Toggle status
        $newStatus = !$user['is_active'];
        $stmt = $pdo->prepare("UPDATE users SET is_active = ? WHERE id = ?");
        $stmt->execute([$newStatus, $userId]);
        
        $statusText = $newStatus ? 'activated' : 'deactivated';
        $message = "User '{$user['username']}' has been $statusText.";
        $messageType = 'success';
        
        // Log activity
        logActivity($_SESSION['user_id'], "user_$statusText", "User: {$user['username']}");
        
    } catch (PDOException $e) {
        error_log("User status toggle error: " . $e->getMessage());
        $message = 'Error updating user status.';
        $messageType = 'error';
    }
}

// Reset user password
function handleResetPassword() {
    global $message, $messageType;
    
    $userId = intval($_POST['user_id'] ?? 0);
    $newPassword = $_POST['new_password'] ?? '';
    
    if ($userId <= 0) {
        $message = 'Invalid user ID.';
        $messageType = 'error';
        return;
    }
    
    if (empty($newPassword)) {
        $message = 'New password is required.';
        $messageType = 'error';
        return;
    }
    
    if (strlen($newPassword) < 6) {
        $message = 'Password must be at least 6 characters.';
        $messageType = 'error';
        return;
    }
    
    try {
        $pdo = getDBConnection();
        
        // Get username
        $stmt = $pdo->prepare("SELECT username FROM users WHERE id = ?");
        $stmt->execute([$userId]);
        $user = $stmt->fetch();
        
        if (!$user) {
            $message = 'User not found.';
            $messageType = 'error';
            return;
        }
        
        // Update password
        $hashedPassword = password_hash($newPassword, PASSWORD_DEFAULT);
        $stmt = $pdo->prepare("UPDATE users SET password = ? WHERE id = ?");
        $stmt->execute([$hashedPassword, $userId]);
        
        $message = "Password reset successfully for user '{$user['username']}'.";
        $messageType = 'success';
        
        // Log activity
        logActivity($_SESSION['user_id'], 'password_reset', "Reset password for: {$user['username']}");
        
    } catch (PDOException $e) {
        error_log("Password reset error: " . $e->getMessage());
        $message = 'Error resetting password.';
        $messageType = 'error';
    }
}

// Get all users
function getAllUsers() {
    try {
        $pdo = getDBConnection();
        $stmt = $pdo->query("
            SELECT id, username, email, role, is_active, created_at,
                   (SELECT COUNT(*) FROM calculations WHERE user_id = users.id) as calculation_count
            FROM users 
            ORDER BY created_at DESC
        ");
        return $stmt->fetchAll();
    } catch (PDOException $e) {
        error_log("Error fetching users: " . $e->getMessage());
        return [];
    }
}

$users = getAllUsers();
$csrfToken = generateCSRFToken();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manage Users - Field Service Calculator</title>
    <link rel="stylesheet" href="css/styles.css">
    <style>
        .user-form {
            background: white;
            padding: 2rem;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            margin-bottom: 2rem;
        }
        
        .users-table-container {
            background: white;
            padding: 2rem;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .status-badge {
            display: inline-block;
            padding: 0.25rem 0.75rem;
            border-radius: 3px;
            font-size: 0.875rem;
            font-weight: 500;
        }
        
        .status-active {
            background-color: #d4edda;
            color: #155724;
        }
        
        .status-inactive {
            background-color: #f8d7da;
            color: #721c24;
        }
        
        .role-badge {
            display: inline-block;
            padding: 0.25rem 0.75rem;
            border-radius: 3px;
            font-size: 0.875rem;
            font-weight: 500;
            background-color: #e9ecef;
            color: #495057;
        }
        
        .role-admin {
            background-color: #cfe2ff;
            color: #084298;
        }
        
        .action-buttons {
            display: flex;
            gap: 0.5rem;
            flex-wrap: wrap;
        }
        
        .btn-small {
            padding: 0.25rem 0.75rem;
            font-size: 0.875rem;
        }
        
        .modal {
            display: none;
            position: fixed;
            z-index: 1000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.5);
        }
        
        .modal-content {
            background-color: white;
            margin: 15% auto;
            padding: 2rem;
            border-radius: 8px;
            width: 90%;
            max-width: 500px;
        }
        
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
        }
        
        .close {
            font-size: 1.5rem;
            cursor: pointer;
            color: #666;
        }
        
        .close:hover {
            color: #000;
        }
        
        @media (max-width: 768px) {
            .action-buttons {
                flex-direction: column;
            }
            
            .btn-small {
                width: 100%;
            }
        }
    </style>
</head>
<body>
    <nav class="navbar">
        <div class="navbar-content">
            <h1>Manage Users</h1>
            <div class="navbar-nav">
                <span>Welcome, <?php echo sanitizeInput($_SESSION['username']); ?></span>
                <a href="index.php">Calculator</a>
                <a href="admin.php">Dashboard</a>
                <a href="logout.php">Logout</a>
            </div>
        </div>
    </nav>
    
    <div class="container">
        <?php if ($message): ?>
            <div class="alert alert-<?php echo $messageType; ?>">
                <?php echo $message; ?>
            </div>
        <?php endif; ?>
        
        <?php displayFlashMessage(); ?>
        
        <!-- Create User Form -->
        <div class="user-form">
            <h2>Create New User</h2>
            <form method="POST" action="manage_users.php">
                <input type="hidden" name="csrf_token" value="<?php echo $csrfToken; ?>">
                <input type="hidden" name="action" value="create">
                
                <div class="form-grid">
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input type="text" id="username" name="username" required 
                               pattern="[a-zA-Z0-9_]+" minlength="3" maxlength="50"
                               title="Username can only contain letters, numbers, and underscores">
                    </div>
                    
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" required 
                               minlength="6" title="Password must be at least 6 characters">
                    </div>
                    
                    <div class="form-group">
                        <label for="role">Role</label>
                        <select id="role" name="role" required>
                            <option value="">Select Role</option>
                            <option value="tech">Field Tech</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                </div>
                
                <button type="submit" class="btn-primary">Create User</button>
            </form>
        </div>
        
        <!-- Users List -->
        <div class="users-table-container">
            <h2>All Users</h2>
            <div class="table-wrapper">
                <table class="calculations-table">
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Calculations</th>
                            <th>Created</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($users as $user): ?>
                        <tr>
                            <td><?php echo sanitizeInput($user['username']); ?></td>
                            <td><?php echo sanitizeInput($user['email']); ?></td>
                            <td>
                                <span class="role-badge <?php echo $user['role'] === 'admin' ? 'role-admin' : ''; ?>">
                                    <?php echo ucfirst($user['role']); ?>
                                </span>
                            </td>
                            <td>
                                <span class="status-badge <?php echo $user['is_active'] ? 'status-active' : 'status-inactive'; ?>">
                                    <?php echo $user['is_active'] ? 'Active' : 'Inactive'; ?>
                                </span>
                            </td>
                            <td><?php echo number_format($user['calculation_count']); ?></td>
                            <td><?php echo date('m/d/y', strtotime($user['created_at'])); ?></td>
                            <td>
                                <div class="action-buttons">
                                    <?php if ($user['id'] != $_SESSION['user_id']): ?>
                                    <form method="POST" action="manage_users.php" style="display: inline;">
                                        <input type="hidden" name="csrf_token" value="<?php echo $csrfToken; ?>">
                                        <input type="hidden" name="action" value="toggle_status">
                                        <input type="hidden" name="user_id" value="<?php echo $user['id']; ?>">
                                        <button type="submit" class="btn-secondary btn-small">
                                            <?php echo $user['is_active'] ? 'Deactivate' : 'Activate'; ?>
                                        </button>
                                    </form>
                                    <?php endif; ?>
                                    
                                    <button type="button" class="btn-primary btn-small" 
                                            onclick="showResetPasswordModal(<?php echo $user['id']; ?>, '<?php echo sanitizeInput($user['username']); ?>')">
                                        Reset Password
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    
    <!-- Reset Password Modal -->
    <div id="resetPasswordModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h3>Reset Password</h3>
                <span class="close" onclick="closeResetPasswordModal()">&times;</span>
            </div>
            <form method="POST" action="manage_users.php">
                <input type="hidden" name="csrf_token" value="<?php echo $csrfToken; ?>">
                <input type="hidden" name="action" value="reset_password">
                <input type="hidden" name="user_id" id="reset_user_id" value="">
                
                <p>Reset password for user: <strong id="reset_username"></strong></p>
                
                <div class="form-group">
                    <label for="new_password">New Password</label>
                    <input type="password" id="new_password" name="new_password" required 
                           minlength="6" title="Password must be at least 6 characters">
                </div>
                
                <div class="button-group">
                    <button type="submit" class="btn-primary">Reset Password</button>
                    <button type="button" class="btn-secondary" onclick="closeResetPasswordModal()">Cancel</button>
                </div>
            </form>
        </div>
    </div>
    
    <script>
        function showResetPasswordModal(userId, username) {
            document.getElementById('reset_user_id').value = userId;
            document.getElementById('reset_username').textContent = username;
            document.getElementById('resetPasswordModal').style.display = 'block';
            document.getElementById('new_password').focus();
        }
        
        function closeResetPasswordModal() {
            document.getElementById('resetPasswordModal').style.display = 'none';
            document.getElementById('new_password').value = '';
        }
        
        // Close modal if clicking outside
        window.onclick = function(event) {
            const modal = document.getElementById('resetPasswordModal');
            if (event.target == modal) {
                closeResetPasswordModal();
            }
        }
    </script>
</body>
</html>