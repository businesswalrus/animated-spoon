<?php
require_once 'config.php';

// Require admin role
requireRole('admin');

$message = '';
$messageType = '';

// Initialize filter variables
$filterUser = $_GET['user'] ?? '';
$filterDateFrom = $_GET['date_from'] ?? date('Y-m-d', strtotime('-30 days'));
$filterDateTo = $_GET['date_to'] ?? date('Y-m-d');
$filterServiceType = $_GET['service_type'] ?? '';

// Get statistics with caching
function getStatistics($pdo, $filters = []) {
    $cacheKey = 'stats_' . md5(serialize($filters));
    
    // Check cache (5 minute TTL)
    if (isset($_SESSION['cache'][$cacheKey]) && 
        (time() - $_SESSION['cache'][$cacheKey]['time']) < 300) {
        return $_SESSION['cache'][$cacheKey]['data'];
    }
    
    // Build WHERE clause
    $where = [];
    $params = [];
    
    if (!empty($filters['user'])) {
        $where[] = 'user_id = ?';
        $params[] = $filters['user'];
    }
    
    if (!empty($filters['date_from'])) {
        $where[] = 'created_at >= ?';
        $params[] = $filters['date_from'] . ' 00:00:00';
    }
    
    if (!empty($filters['date_to'])) {
        $where[] = 'created_at <= ?';
        $params[] = $filters['date_to'] . ' 23:59:59';
    }
    
    if (!empty($filters['service_type'])) {
        $where[] = 'service_type = ?';
        $params[] = $filters['service_type'];
    }
    
    $whereClause = empty($where) ? '' : 'WHERE ' . implode(' AND ', $where);
    
    try {
        // Total calculations
        $stmt = $pdo->prepare("SELECT COUNT(*) as total FROM calculations $whereClause");
        $stmt->execute($params);
        $totalCalcs = $stmt->fetchColumn();
        
        // Total revenue
        $stmt = $pdo->prepare("SELECT SUM(total_amount) as total FROM calculations $whereClause");
        $stmt->execute($params);
        $totalRevenue = $stmt->fetchColumn() ?: 0;
        
        // Average ticket
        $avgTicket = $totalCalcs > 0 ? $totalRevenue / $totalCalcs : 0;
        
        // Service type breakdown
        $stmt = $pdo->prepare("
            SELECT service_type, COUNT(*) as count, SUM(total_amount) as revenue 
            FROM calculations $whereClause 
            " . (!empty($where) ? "" : "WHERE 1=1") . "
            GROUP BY service_type
        ");
        $stmt->execute($params);
        $serviceBreakdown = $stmt->fetchAll();
        
        // Top technicians (if no user filter)
        $topTechs = [];
        if (empty($filters['user'])) {
            $stmt = $pdo->prepare("
                SELECT u.username, COUNT(c.id) as count, SUM(c.total_amount) as revenue 
                FROM calculations c 
                JOIN users u ON c.user_id = u.id 
                $whereClause 
                GROUP BY c.user_id 
                ORDER BY revenue DESC 
                LIMIT 5
            ");
            $stmt->execute($params);
            $topTechs = $stmt->fetchAll();
        }
        
        $stats = [
            'total_calculations' => $totalCalcs,
            'total_revenue' => $totalRevenue,
            'average_ticket' => $avgTicket,
            'service_breakdown' => $serviceBreakdown,
            'top_techs' => $topTechs
        ];
        
        // Cache results
        $_SESSION['cache'][$cacheKey] = [
            'time' => time(),
            'data' => $stats
        ];
        
        return $stats;
        
    } catch (PDOException $e) {
        error_log("Statistics query error: " . $e->getMessage());
        return [
            'total_calculations' => 0,
            'total_revenue' => 0,
            'average_ticket' => 0,
            'service_breakdown' => [],
            'top_techs' => []
        ];
    }
}

// Get all users for filter dropdown
function getAllUsers($pdo) {
    try {
        $stmt = $pdo->query("SELECT id, username FROM users WHERE is_active = 1 ORDER BY username");
        return $stmt->fetchAll();
    } catch (PDOException $e) {
        error_log("Error fetching users: " . $e->getMessage());
        return [];
    }
}

// Get filtered calculations
function getCalculations($pdo, $filters = [], $page = 1, $perPage = 50) {
    $offset = ($page - 1) * $perPage;
    
    // Build WHERE clause
    $where = [];
    $params = [];
    
    if (!empty($filters['user'])) {
        $where[] = 'c.user_id = ?';
        $params[] = $filters['user'];
    }
    
    if (!empty($filters['date_from'])) {
        $where[] = 'c.created_at >= ?';
        $params[] = $filters['date_from'] . ' 00:00:00';
    }
    
    if (!empty($filters['date_to'])) {
        $where[] = 'c.created_at <= ?';
        $params[] = $filters['date_to'] . ' 23:59:59';
    }
    
    if (!empty($filters['service_type'])) {
        $where[] = 'c.service_type = ?';
        $params[] = $filters['service_type'];
    }
    
    $whereClause = empty($where) ? '' : 'WHERE ' . implode(' AND ', $where);
    
    try {
        // Get total count for pagination
        $stmt = $pdo->prepare("SELECT COUNT(*) FROM calculations c $whereClause");
        $stmt->execute($params);
        $totalCount = $stmt->fetchColumn();
        
        // Get calculations
        $params[] = $perPage;
        $params[] = $offset;
        
        $stmt = $pdo->prepare("
            SELECT c.*, u.username 
            FROM calculations c 
            JOIN users u ON c.user_id = u.id 
            $whereClause 
            ORDER BY c.created_at DESC 
            LIMIT ? OFFSET ?
        ");
        $stmt->execute($params);
        $calculations = $stmt->fetchAll();
        
        return [
            'data' => $calculations,
            'total' => $totalCount,
            'pages' => ceil($totalCount / $perPage),
            'current_page' => $page
        ];
        
    } catch (PDOException $e) {
        error_log("Error fetching calculations: " . $e->getMessage());
        return [
            'data' => [],
            'total' => 0,
            'pages' => 0,
            'current_page' => 1
        ];
    }
}

// Get data
$pdo = getDBConnection();
$users = getAllUsers($pdo);

$filters = [
    'user' => $filterUser,
    'date_from' => $filterDateFrom,
    'date_to' => $filterDateTo,
    'service_type' => $filterServiceType
];

$stats = getStatistics($pdo, $filters);
$currentPage = isset($_GET['page']) ? max(1, intval($_GET['page'])) : 1;
$calculations = getCalculations($pdo, $filters, $currentPage);

$csrfToken = generateCSRFToken();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard - Field Service Calculator</title>
    <link rel="stylesheet" href="css/styles.css">
    <style>
        /* Admin-specific styles */
        .dashboard-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1rem;
            margin-bottom: 2rem;
        }
        
        .stat-card {
            background: white;
            padding: 1.5rem;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            text-align: center;
        }
        
        .stat-card h3 {
            color: #666;
            font-size: 0.875rem;
            text-transform: uppercase;
            margin-bottom: 0.5rem;
        }
        
        .stat-value {
            font-size: 2rem;
            font-weight: bold;
            color: #333;
        }
        
        .filter-form {
            background: white;
            padding: 1.5rem;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            margin-bottom: 2rem;
        }
        
        .filter-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
            margin-bottom: 1rem;
        }
        
        .pagination {
            display: flex;
            justify-content: center;
            gap: 0.5rem;
            margin-top: 2rem;
        }
        
        .pagination a,
        .pagination span {
            padding: 0.5rem 1rem;
            border: 1px solid #ddd;
            border-radius: 4px;
            text-decoration: none;
            color: #333;
        }
        
        .pagination .active {
            background-color: #4CAF50;
            color: white;
            border-color: #4CAF50;
        }
        
        .breakdown-table {
            width: 100%;
            margin-top: 1rem;
        }
        
        .breakdown-table th,
        .breakdown-table td {
            padding: 0.5rem;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }
        
        .export-btn {
            position: absolute;
            top: 1rem;
            right: 1rem;
        }
        
        @media (max-width: 768px) {
            .dashboard-grid {
                grid-template-columns: 1fr;
            }
            
            .filter-grid {
                grid-template-columns: 1fr;
            }
            
            .export-btn {
                position: static;
                margin-bottom: 1rem;
            }
        }
    </style>
</head>
<body>
    <nav class="navbar">
        <div class="navbar-content">
            <h1>Admin Dashboard</h1>
            <div class="navbar-nav">
                <span>Welcome, <?php echo sanitizeInput($_SESSION['username']); ?></span>
                <a href="index.php">Calculator</a>
                <a href="manage_users.php">Manage Users</a>
                <a href="logout.php">Logout</a>
            </div>
        </div>
    </nav>
    
    <div class="container">
        <?php if ($message): ?>
            <div class="alert alert-<?php echo $messageType; ?>">
                <?php echo sanitizeInput($message); ?>
            </div>
        <?php endif; ?>
        
        <?php displayFlashMessage(); ?>
        
        <!-- Statistics Dashboard -->
        <div class="dashboard-grid">
            <div class="stat-card">
                <h3>Total Calculations</h3>
                <div class="stat-value"><?php echo number_format($stats['total_calculations']); ?></div>
            </div>
            
            <div class="stat-card">
                <h3>Total Revenue</h3>
                <div class="stat-value"><?php echo formatCurrency($stats['total_revenue']); ?></div>
            </div>
            
            <div class="stat-card">
                <h3>Average Ticket</h3>
                <div class="stat-value"><?php echo formatCurrency($stats['average_ticket']); ?></div>
            </div>
        </div>
        
        <!-- Service Type Breakdown -->
        <?php if (!empty($stats['service_breakdown'])): ?>
        <div class="stat-card">
            <h3>Service Type Breakdown</h3>
            <table class="breakdown-table">
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Count</th>
                        <th>Revenue</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($stats['service_breakdown'] as $service): ?>
                    <tr>
                        <td><?php echo sanitizeInput($service['service_type']); ?></td>
                        <td><?php echo number_format($service['count']); ?></td>
                        <td><?php echo formatCurrency($service['revenue']); ?></td>
                    </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        </div>
        <?php endif; ?>
        
        <!-- Top Technicians -->
        <?php if (!empty($stats['top_techs'])): ?>
        <div class="stat-card" style="margin-top: 1rem;">
            <h3>Top Technicians</h3>
            <table class="breakdown-table">
                <thead>
                    <tr>
                        <th>Technician</th>
                        <th>Jobs</th>
                        <th>Revenue</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($stats['top_techs'] as $tech): ?>
                    <tr>
                        <td><?php echo sanitizeInput($tech['username']); ?></td>
                        <td><?php echo number_format($tech['count']); ?></td>
                        <td><?php echo formatCurrency($tech['revenue']); ?></td>
                    </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        </div>
        <?php endif; ?>
        
        <!-- Filters -->
        <div class="filter-form" style="position: relative; margin-top: 2rem;">
            <a href="export.php?<?php echo http_build_query($_GET); ?>" class="btn btn-secondary export-btn">Export CSV</a>
            
            <h3>Filter Calculations</h3>
            <form method="GET" action="admin.php">
                <div class="filter-grid">
                    <div class="form-group">
                        <label for="user">Technician</label>
                        <select id="user" name="user">
                            <option value="">All Technicians</option>
                            <?php foreach ($users as $user): ?>
                            <option value="<?php echo $user['id']; ?>" 
                                    <?php echo $filterUser == $user['id'] ? 'selected' : ''; ?>>
                                <?php echo sanitizeInput($user['username']); ?>
                            </option>
                            <?php endforeach; ?>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="date_from">Date From</label>
                        <input type="date" id="date_from" name="date_from" 
                               value="<?php echo $filterDateFrom; ?>">
                    </div>
                    
                    <div class="form-group">
                        <label for="date_to">Date To</label>
                        <input type="date" id="date_to" name="date_to" 
                               value="<?php echo $filterDateTo; ?>">
                    </div>
                    
                    <div class="form-group">
                        <label for="service_type">Service Type</label>
                        <select id="service_type" name="service_type">
                            <option value="">All Types</option>
                            <option value="Residential" <?php echo $filterServiceType == 'Residential' ? 'selected' : ''; ?>>
                                Residential
                            </option>
                            <option value="Commercial" <?php echo $filterServiceType == 'Commercial' ? 'selected' : ''; ?>>
                                Commercial
                            </option>
                        </select>
                    </div>
                </div>
                
                <div class="button-group">
                    <button type="submit" class="btn-primary">Apply Filters</button>
                    <a href="admin.php" class="btn btn-secondary">Clear Filters</a>
                </div>
            </form>
        </div>
        
        <!-- Calculations Table -->
        <div class="recent-calculations">
            <h3>Calculations (<?php echo number_format($calculations['total']); ?> total)</h3>
            
            <?php if (!empty($calculations['data'])): ?>
            <div class="table-wrapper">
                <table class="calculations-table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Technician</th>
                            <th>Service Type</th>
                            <th>Material Cost</th>
                            <th>Markup %</th>
                            <th>Material Charge</th>
                            <th>Labor</th>
                            <th>Tax</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($calculations['data'] as $calc): ?>
                        <tr>
                            <td><?php echo date('m/d/y h:i A', strtotime($calc['created_at'])); ?></td>
                            <td><?php echo sanitizeInput($calc['username']); ?></td>
                            <td><?php echo sanitizeInput($calc['service_type']); ?></td>
                            <td><?php echo formatCurrency($calc['material_cost']); ?></td>
                            <td><?php echo isset($calc['material_markup_percent']) ? $calc['material_markup_percent'] . '%' : '-'; ?></td>
                            <td><?php echo isset($calc['material_charge']) ? formatCurrency($calc['material_charge']) : '-'; ?></td>
                            <td><?php echo formatCurrency($calc['labor_charge']); ?></td>
                            <td><?php echo formatCurrency($calc['tax_amount']); ?></td>
                            <td><?php echo formatCurrency($calc['total_amount']); ?></td>
                        </tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>
            </div>
            
            <!-- Pagination -->
            <?php if ($calculations['pages'] > 1): ?>
            <div class="pagination">
                <?php if ($currentPage > 1): ?>
                <a href="?<?php echo http_build_query(array_merge($_GET, ['page' => $currentPage - 1])); ?>">
                    Previous
                </a>
                <?php endif; ?>
                
                <?php for ($i = 1; $i <= $calculations['pages']; $i++): ?>
                    <?php if ($i == $currentPage): ?>
                    <span class="active"><?php echo $i; ?></span>
                    <?php else: ?>
                    <a href="?<?php echo http_build_query(array_merge($_GET, ['page' => $i])); ?>">
                        <?php echo $i; ?>
                    </a>
                    <?php endif; ?>
                <?php endfor; ?>
                
                <?php if ($currentPage < $calculations['pages']): ?>
                <a href="?<?php echo http_build_query(array_merge($_GET, ['page' => $currentPage + 1])); ?>">
                    Next
                </a>
                <?php endif; ?>
            </div>
            <?php endif; ?>
            
            <?php else: ?>
            <p>No calculations found matching the selected filters.</p>
            <?php endif; ?>
        </div>
    </div>
    
    <script>
        // Auto-refresh statistics every 5 minutes
        setTimeout(function() {
            location.reload();
        }, 300000);
    </script>
</body>
</html>