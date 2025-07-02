<?php
require_once 'config.php';

// Redirect if already logged in
if (isLoggedIn()) {
    if ($_SESSION['role'] === 'admin') {
        redirect('admin.php');
    } else {
        redirect('index.php');
    }
    exit();
}

$error = '';
$success = '';

// Check for messages
if (isset($_GET['timeout']) && $_GET['timeout'] == '1') {
    $error = 'Your session has expired. Please login again.';
} elseif (isset($_GET['logout']) && $_GET['logout'] == 'success') {
    $success = 'You have been successfully logged out.';
}

// Handle login form submission
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = sanitizeInput($_POST['username'] ?? '');
    $password = $_POST['password'] ?? '';
    $clientIP = getClientIP();
    
    // Check rate limiting
    if (!checkRateLimit($clientIP)) {
        $error = 'Too many failed login attempts. Please try again in 15 minutes.';
        logActivity(null, 'login_blocked', "IP: $clientIP - Rate limit exceeded");
    } else if (!verifyCSRFToken($_POST['csrf_token'] ?? '')) {
        $error = 'Invalid form submission. Please try again.';
    } else if (empty($username) || empty($password)) {
        $error = 'Please enter both username and password.';
    } else {
        // Record the login attempt
        recordLoginAttempt($clientIP, null); // Don't log username for privacy
        
        // Attempt to authenticate user
        try {
            $pdo = getDBConnection();
            $stmt = $pdo->prepare("SELECT id, username, email, password, role, is_active FROM users WHERE username = ? OR email = ?");
            $stmt->execute([$username, $username]);
            $user = $stmt->fetch();
            
            if ($user && password_verify($password, $user['password'])) {
                if (!$user['is_active']) {
                    $error = 'Your account has been deactivated. Please contact an administrator.';
                    logActivity($user['id'], 'login_failed', "Account deactivated");
                } else {
                    // Successful login
                    clearLoginAttempts($clientIP); // Clear rate limiting
                    session_regenerate_id(true);
                    
                    // Set session variables
                    $_SESSION['user_id'] = $user['id'];
                    $_SESSION['username'] = $user['username'];
                    $_SESSION['email'] = $user['email'];
                    $_SESSION['role'] = $user['role'];
                    $_SESSION['LOGIN_TIME'] = time(); // For session timeout
                    $_SESSION['LAST_ACTIVITY'] = time();
                    
                    // Update last login time
                    $stmt = $pdo->prepare("UPDATE users SET last_login = NOW(), failed_login_count = 0 WHERE id = ?");
                    $stmt->execute([$user['id']]);
                    
                    // Log the activity
                    logActivity($user['id'], 'login', "Successful login from IP: $clientIP");
                    
                    // Redirect based on role
                    if ($user['role'] === 'admin') {
                        redirect('admin.php');
                    } else {
                        redirect('index.php');
                    }
                    exit();
                }
            } else {
                $error = 'Invalid username or password.';
                // Log failed attempt with IP only
                logActivity(null, 'login_failed', "Failed attempt from IP: $clientIP");
                
                // Update failed login count if user exists
                if ($user) {
                    $stmt = $pdo->prepare("UPDATE users SET failed_login_count = failed_login_count + 1 WHERE id = ?");
                    $stmt->execute([$user['id']]);
                }
            }
        } catch (PDOException $e) {
            error_log("Login error: " . $e->getMessage());
            $error = 'An error occurred. Please try again later.';
        }
    }
}

$csrfToken = generateCSRFToken();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - Field Service Calculator</title>
    <link rel="stylesheet" href="css/styles.css">
    <style>
        /* Temporary inline styles until styles.css is created */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            background-color: #f5f5f5;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }
        
        .login-container {
            background: white;
            padding: 2rem;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 400px;
        }
        
        .login-header {
            text-align: center;
            margin-bottom: 2rem;
        }
        
        .login-header h1 {
            color: #333;
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
        }
        
        .login-header p {
            color: #666;
            font-size: 0.875rem;
        }
        
        .form-group {
            margin-bottom: 1.5rem;
        }
        
        label {
            display: block;
            margin-bottom: 0.5rem;
            color: #333;
            font-weight: 500;
        }
        
        input[type="text"],
        input[type="password"] {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 1rem;
            transition: border-color 0.3s;
        }
        
        input[type="text"]:focus,
        input[type="password"]:focus {
            outline: none;
            border-color: #4CAF50;
        }
        
        button {
            width: 100%;
            padding: 0.75rem;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 4px;
            font-size: 1rem;
            font-weight: 500;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        
        button:hover {
            background-color: #45a049;
        }
        
        button:disabled {
            background-color: #ccc;
            cursor: not-allowed;
        }
        
        .alert {
            padding: 0.75rem;
            margin-bottom: 1rem;
            border-radius: 4px;
            font-size: 0.875rem;
        }
        
        .alert-error {
            background-color: #fee;
            color: #c33;
            border: 1px solid #fcc;
        }
        
        .alert-success {
            background-color: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
        }
        
        .demo-info {
            margin-top: 2rem;
            padding: 1rem;
            background-color: #f0f8ff;
            border-radius: 4px;
            font-size: 0.875rem;
            color: #666;
        }
        
        .demo-info h3 {
            color: #333;
            margin-bottom: 0.5rem;
        }
        
        .demo-info code {
            background-color: #e8f5ff;
            padding: 2px 4px;
            border-radius: 3px;
            font-family: monospace;
        }
        
        .security-notice {
            margin-top: 1rem;
            padding: 0.5rem;
            background-color: #fff3cd;
            border: 1px solid #ffeaa7;
            border-radius: 4px;
            font-size: 0.75rem;
            color: #856404;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="login-container">
        <div class="login-header">
            <h1>Field Service Calculator</h1>
            <p>Please sign in to continue</p>
        </div>
        
        <?php if ($error): ?>
            <div class="alert alert-error"><?php echo sanitizeInput($error); ?></div>
        <?php endif; ?>
        
        <?php if ($success): ?>
            <div class="alert alert-success"><?php echo sanitizeInput($success); ?></div>
        <?php endif; ?>
        
        <?php displayFlashMessage(); ?>
        
        <form method="POST" action="login.php" id="loginForm">
            <input type="hidden" name="csrf_token" value="<?php echo $csrfToken; ?>">
            
            <div class="form-group">
                <label for="username">Username or Email</label>
                <input type="text" id="username" name="username" required autofocus 
                       value="<?php echo isset($_POST['username']) ? sanitizeInput($_POST['username']) : ''; ?>"
                       autocomplete="username">
            </div>
            
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required 
                       autocomplete="current-password">
            </div>
            
            <button type="submit" id="loginButton">Sign In</button>
        </form>
        
        <div class="demo-info">
            <h3>Demo Credentials</h3>
            <p>Admin: <code>admin</code> / <code>admin123</code></p>
            <p>Tech: <code>tech1</code> or <code>tech2</code> / <code>tech123</code></p>
        </div>
        
        <div class="security-notice">
            <p>🔒 This connection is <?php echo $is_https ? 'secure (HTTPS)' : 'not secure (HTTP)'; ?></p>
        </div>
    </div>
    
    <script>
        // Disable submit button on form submission to prevent double-clicks
        document.getElementById('loginForm').addEventListener('submit', function() {
            document.getElementById('loginButton').disabled = true;
            document.getElementById('loginButton').textContent = 'Signing in...';
        });
    </script>
</body>
</html>