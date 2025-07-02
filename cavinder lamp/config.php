<?php
// Field Service Calculator - Configuration File
// This file contains database connection and common helper functions

// Environment detection
$app_env = getenv('APP_ENV') ?: 'development';

// Error reporting based on environment
if ($app_env === 'production') {
    error_reporting(0);
    ini_set('display_errors', 0);
    ini_set('log_errors', 1);
    $log_dir = getenv('LOG_DIR') ?: '/var/log/app';
    if (!is_dir($log_dir)) {
        $log_dir = sys_get_temp_dir();
    }
    ini_set('error_log', $log_dir . '/php-errors.log');
} else {
    // Development settings
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
}

// Database configuration from environment variables
define('DB_HOST', getenv('DB_HOST') ?: 'localhost');
define('DB_NAME', getenv('DB_NAME') ?: 'field_service_calculator');
define('DB_USER', getenv('DB_USER') ?: 'root');
define('DB_PASS', getenv('DB_PASS') ?: '');
define('DB_CHARSET', 'utf8mb4');

// Validate critical settings in production
if ($app_env === 'production') {
    if (empty(getenv('DB_PASS'))) {
        error_log('CRITICAL: Database password not configured in production');
        die('Configuration error. Please contact administrator.');
    }
    if (getenv('DB_USER') === 'root') {
        error_log('WARNING: Using root database user in production');
    }
}

// Labor rates (per hour)
define('RATE_REGULAR', 185.00);
define('RATE_TIME_HALF', 277.50);  // 185 * 1.5
define('RATE_DOUBLE', 370.00);     // 185 * 2

// Labor minimum
define('LABOR_MINIMUM', 170.00);

// Tax rate
define('TAX_RATE', 0.07);

// Security headers (applied before any output)
if (!headers_sent()) {
    // Content Security Policy - Note: 'unsafe-inline' is temporary, plan to remove
    header("Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; frame-ancestors 'none';");
    header("X-Content-Type-Options: nosniff");
    header("X-Frame-Options: DENY");
    header("X-XSS-Protection: 1; mode=block");
    header("Referrer-Policy: strict-origin-when-cross-origin");
    
    // HSTS header for HTTPS connections
    if (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on') {
        header("Strict-Transport-Security: max-age=31536000; includeSubDomains");
    }
}

// Session configuration
ini_set('session.use_strict_mode', 1);
ini_set('session.cookie_httponly', 1);
ini_set('session.use_only_cookies', 1);
ini_set('session.cookie_samesite', 'Lax');

// Auto-detect HTTPS for secure cookies
$is_https = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on';
ini_set('session.cookie_secure', $is_https ? 1 : 0);

// Session timeout configuration
ini_set('session.gc_maxlifetime', 3600); // 1 hour server-side timeout
ini_set('session.cookie_lifetime', 0);    // Browser session cookie

// Regenerate session ID periodically for security
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

// Regenerate session ID every 30 minutes
if (isset($_SESSION['LAST_REGENERATION'])) {
    if (time() - $_SESSION['LAST_REGENERATION'] > 1800) {
        session_regenerate_id(true);
        $_SESSION['LAST_REGENERATION'] = time();
    }
} else {
    $_SESSION['LAST_REGENERATION'] = time();
}

// Database connection function
function getDBConnection() {
    static $pdo = null;
    
    if ($pdo === null) {
        try {
            $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=" . DB_CHARSET;
            $options = [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES => false,
                PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES " . DB_CHARSET
            ];
            
            $pdo = new PDO($dsn, DB_USER, DB_PASS, $options);
        } catch (PDOException $e) {
            // Log error details
            error_log("Database connection failed: " . $e->getMessage());
            
            // User-friendly error message
            if ($GLOBALS['app_env'] === 'production') {
                die("Database connection failed. Please try again later.");
            } else {
                die("Database connection failed: " . $e->getMessage());
            }
        }
    }
    
    return $pdo;
}

// Security helper functions

// Sanitize input data
function sanitizeInput($data) {
    if (is_array($data)) {
        return array_map('sanitizeInput', $data);
    }
    $data = trim($data);
    // Removed stripslashes() - deprecated and unnecessary
    $data = htmlspecialchars($data, ENT_QUOTES, 'UTF-8');
    return $data;
}

// Check if user is logged in
function isLoggedIn() {
    return isset($_SESSION['user_id']) && 
           isset($_SESSION['username']) && 
           isset($_SESSION['role']) &&
           isset($_SESSION['LOGIN_TIME']);
}

// Check session timeout
function checkSessionTimeout() {
    if (isLoggedIn()) {
        $timeout = 3600; // 1 hour
        if (time() - $_SESSION['LOGIN_TIME'] > $timeout) {
            // Session expired
            session_destroy();
            return false;
        }
        // Update last activity time
        $_SESSION['LAST_ACTIVITY'] = time();
    }
    return true;
}

// Require login - redirect to login page if not authenticated
function requireLogin() {
    if (!isLoggedIn() || !checkSessionTimeout()) {
        $_SESSION = array(); // Clear session
        session_destroy();
        redirect('login.php?timeout=1');
        exit();
    }
}

// Check if user has required role
function checkRole($requiredRole) {
    if (!isLoggedIn()) {
        return false;
    }
    return $_SESSION['role'] === $requiredRole;
}

// Require specific role - redirect if not authorized
function requireRole($requiredRole) {
    requireLogin();
    if (!checkRole($requiredRole)) {
        $_SESSION['error'] = "Access denied. You don't have permission to view this page.";
        if ($_SESSION['role'] === 'tech') {
            redirect('index.php');
        } else {
            redirect('login.php');
        }
        exit();
    }
}

// Redirect helper with exit
function redirect($url) {
    // Ensure no output before redirect
    if (ob_get_level()) {
        ob_end_clean();
    }
    header("Location: $url");
    exit();
}

// Format currency
function formatCurrency($amount) {
    return '$' . number_format($amount, 2);
}

// Generate CSRF token
function generateCSRFToken() {
    if (!isset($_SESSION['csrf_token'])) {
        $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
    }
    return $_SESSION['csrf_token'];
}

// Verify CSRF token with timing attack protection
function verifyCSRFToken($token) {
    if (!isset($_SESSION['csrf_token']) || empty($token)) {
        return false;
    }
    return hash_equals($_SESSION['csrf_token'], $token);
}

// Get labor rate based on category
function getLaborRate($category) {
    $rates = [
        'Regular Time' => RATE_REGULAR,
        'Time and a Half' => RATE_TIME_HALF,
        'Double Time' => RATE_DOUBLE
    ];
    
    return isset($rates[$category]) ? $rates[$category] : RATE_REGULAR;
}

// Calculate material markup based on cost tiers
function calculateMaterialMarkup($cost, $returnDetails = false) {
    if ($cost <= 0) {
        return $returnDetails ? ['charge' => 0, 'percent' => 0] : 0;
    }
    
    // Markup tiers (cost + markup percentage)
    $markupPercent = 0;
    $charge = 0;
    
    if ($cost <= 1.00) {
        $markupPercent = 400.00;
        $charge = $cost * 5.00;
    } elseif ($cost <= 5.00) {
        $markupPercent = 300.00;
        $charge = $cost * 4.00;
    } elseif ($cost <= 10.00) {
        $markupPercent = 250.00;
        $charge = $cost * 3.50;
    } elseif ($cost <= 25.00) {
        $markupPercent = 200.00;
        $charge = $cost * 3.00;
    } elseif ($cost <= 50.00) {
        $markupPercent = 150.00;
        $charge = $cost * 2.50;
    } elseif ($cost <= 75.00) {
        $markupPercent = 125.00;
        $charge = $cost * 2.25;
    } elseif ($cost <= 500.00) {
        $markupPercent = 100.00;
        $charge = $cost * 2.00;
    } else {
        $markupPercent = 67.59;
        $charge = $cost * 1.6759;
    }
    
    if ($returnDetails) {
        return [
            'charge' => round($charge, 2),
            'percent' => $markupPercent
        ];
    }
    
    return round($charge, 2);
}

// Calculate labor charge
function calculateLaborCharge($minutes, $rate) {
    if ($minutes < 0 || $rate < 0) {
        return 0;
    }
    $hours = $minutes / 60;
    $laborCharge = round($hours * $rate, 2);
    
    // Apply labor minimum for jobs under 1 hour
    if ($minutes < 60 && $laborCharge < LABOR_MINIMUM) {
        return LABOR_MINIMUM;
    }
    
    return $laborCharge;
}

// Calculate total with optional tax
function calculateTotal($materialCost, $laborCharge, $includeTax = false) {
    // Validate inputs
    $materialCost = max(0, $materialCost);
    $laborCharge = max(0, $laborCharge);
    
    // Apply material markup
    $markedUpMaterial = calculateMaterialMarkup($materialCost);
    
    $subtotal = $markedUpMaterial + $laborCharge;
    if ($includeTax) {
        $tax = round($subtotal * TAX_RATE, 2);
        return [
            'subtotal' => $subtotal,
            'tax' => $tax,
            'total' => $subtotal + $tax
        ];
    }
    return [
        'subtotal' => $subtotal,
        'tax' => 0,
        'total' => $subtotal
    ];
}

// Get user by ID with caching
function getUserById($userId) {
    static $userCache = [];
    
    $userId = intval($userId);
    if (isset($userCache[$userId])) {
        return $userCache[$userId];
    }
    
    $pdo = getDBConnection();
    $stmt = $pdo->prepare("SELECT id, username, email, role, is_active FROM users WHERE id = ? LIMIT 1");
    $stmt->execute([$userId]);
    $user = $stmt->fetch();
    
    if ($user) {
        $userCache[$userId] = $user;
    }
    
    return $user;
}

// Enhanced activity logging
function logActivity($userId, $action, $details = null) {
    try {
        $pdo = getDBConnection();
        $ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
        
        // Check if audit_log table exists
        $stmt = $pdo->query("SHOW TABLES LIKE 'audit_log'");
        if ($stmt->rowCount() > 0) {
            $stmt = $pdo->prepare("
                INSERT INTO audit_log (user_id, action, details, ip_address) 
                VALUES (?, ?, ?, ?)
            ");
            $stmt->execute([$userId ?: null, $action, $details, $ip]);
        }
    } catch (Exception $e) {
        // Fall back to error log if audit table doesn't exist
        $ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
        error_log("Activity: User $userId from IP $ip - $action" . ($details ? " - $details" : ""));
    }
}

// Set flash message
function setFlashMessage($type, $message) {
    $_SESSION['flash'] = [
        'type' => $type,
        'message' => $message,
        'timestamp' => time()
    ];
}

// Get and clear flash message
function getFlashMessage() {
    if (isset($_SESSION['flash'])) {
        $flash = $_SESSION['flash'];
        // Only show messages less than 5 seconds old
        if (time() - $flash['timestamp'] < 5) {
            unset($_SESSION['flash']);
            return $flash;
        }
        unset($_SESSION['flash']);
    }
    return null;
}

// Display flash message HTML
function displayFlashMessage() {
    $flash = getFlashMessage();
    if ($flash) {
        $class = $flash['type'] === 'success' ? 'alert-success' : 'alert-error';
        echo '<div class="alert ' . $class . '">' . sanitizeInput($flash['message']) . '</div>';
    }
}

// Get client IP address (considering proxies)
function getClientIP() {
    $ipKeys = ['HTTP_CF_CONNECTING_IP', 'HTTP_CLIENT_IP', 'HTTP_X_FORWARDED_FOR', 'REMOTE_ADDR'];
    
    foreach ($ipKeys as $key) {
        if (array_key_exists($key, $_SERVER) === true) {
            $ip = $_SERVER[$key];
            if (strpos($ip, ',') !== false) {
                $ip = trim(explode(',', $ip)[0]);
            }
            if (filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE)) {
                return $ip;
            }
        }
    }
    
    return $_SERVER['REMOTE_ADDR'] ?? '127.0.0.1';
}

// Rate limiting helper
function checkRateLimit($identifier, $maxAttempts = 5, $windowMinutes = 15) {
    try {
        $pdo = getDBConnection();
        
        // Check if login_attempts table exists
        $stmt = $pdo->query("SHOW TABLES LIKE 'login_attempts'");
        if ($stmt->rowCount() === 0) {
            return true; // Table doesn't exist yet, allow attempt
        }
        
        // Clean old attempts
        $stmt = $pdo->prepare("DELETE FROM login_attempts WHERE attempt_time < DATE_SUB(NOW(), INTERVAL ? MINUTE)");
        $stmt->execute([$windowMinutes]);
        
        // Count recent attempts
        $stmt = $pdo->prepare("SELECT COUNT(*) as attempts FROM login_attempts WHERE ip_address = ? AND attempt_time > DATE_SUB(NOW(), INTERVAL ? MINUTE)");
        $stmt->execute([$identifier, $windowMinutes]);
        $result = $stmt->fetch();
        
        return ($result['attempts'] < $maxAttempts);
    } catch (Exception $e) {
        error_log("Rate limit check failed: " . $e->getMessage());
        return true; // Allow on error to prevent lockout
    }
}

// Record login attempt
function recordLoginAttempt($identifier, $username = null) {
    try {
        $pdo = getDBConnection();
        
        // Check if table exists
        $stmt = $pdo->query("SHOW TABLES LIKE 'login_attempts'");
        if ($stmt->rowCount() > 0) {
            $stmt = $pdo->prepare("INSERT INTO login_attempts (ip_address, username) VALUES (?, ?)");
            $stmt->execute([$identifier, $username]);
        }
    } catch (Exception $e) {
        error_log("Failed to record login attempt: " . $e->getMessage());
    }
}

// Clear login attempts (on successful login)
function clearLoginAttempts($identifier) {
    try {
        $pdo = getDBConnection();
        
        // Check if table exists
        $stmt = $pdo->query("SHOW TABLES LIKE 'login_attempts'");
        if ($stmt->rowCount() > 0) {
            $stmt = $pdo->prepare("DELETE FROM login_attempts WHERE ip_address = ?");
            $stmt->execute([$identifier]);
        }
    } catch (Exception $e) {
        error_log("Failed to clear login attempts: " . $e->getMessage());
    }
}
?>