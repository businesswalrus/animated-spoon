<?php
require_once 'config.php';

// Store user ID before destroying session
$userId = null;
if (isLoggedIn()) {
    $userId = $_SESSION['user_id'];
}

// Log the logout activity before destroying session
if ($userId) {
    logActivity($userId, 'logout', 'User logged out');
}

// Clear session data
$_SESSION = array();

// Destroy the session cookie
if (isset($_COOKIE[session_name()])) {
    $params = session_get_cookie_params();
    setcookie(session_name(), '', time() - 42000,
        $params["path"], $params["domain"],
        $params["secure"], $params["httponly"]
    );
}

// Destroy the session
session_destroy();

// Redirect to login page with success message via GET parameter
redirect('login.php?logout=success');
?>