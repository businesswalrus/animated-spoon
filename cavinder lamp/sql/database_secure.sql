-- Field Service Calculator Database Schema (Secure Version)
-- This includes all security enhancements

-- Create database (uncomment if needed)
-- CREATE DATABASE field_service_calculator;
-- USE field_service_calculator;

-- Drop tables if they exist (for clean install)
DROP TABLE IF EXISTS audit_log;
DROP TABLE IF EXISTS login_attempts;
DROP TABLE IF EXISTS calculations;
DROP TABLE IF EXISTS users;

-- Create users table with security enhancements
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('tech', 'admin') NOT NULL,
    is_active BOOLEAN DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP NULL,
    failed_login_count INT DEFAULT 0,
    locked_until TIMESTAMP NULL,
    INDEX idx_username (username),
    INDEX idx_email (email),
    INDEX idx_is_active (is_active)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create calculations table with proper constraints
CREATE TABLE calculations (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    service_type ENUM('Residential', 'Commercial') NOT NULL,
    material_cost DECIMAL(10,2) NOT NULL,
    labor_category ENUM('Regular Time', 'Time and a Half', 'Double Time') NOT NULL,
    minutes INT NOT NULL,
    labor_rate DECIMAL(10,2) NOT NULL,
    labor_charge DECIMAL(10,2) NOT NULL,
    include_tax BOOLEAN DEFAULT 0,
    tax_amount DECIMAL(10,2) DEFAULT 0.00,
    total_amount DECIMAL(10,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE RESTRICT,
    INDEX idx_user_created (user_id, created_at),
    INDEX idx_created_at (created_at),
    INDEX idx_service_type (service_type),
    CONSTRAINT chk_material_cost CHECK (material_cost >= 0 AND material_cost <= 999999.99),
    CONSTRAINT chk_minutes CHECK (minutes > 0 AND minutes <= 1440),
    CONSTRAINT chk_labor_rate CHECK (labor_rate > 0),
    CONSTRAINT chk_total_amount CHECK (total_amount >= 0)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create login_attempts table for rate limiting
CREATE TABLE login_attempts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ip_address VARCHAR(45) NOT NULL,
    username VARCHAR(50),
    attempt_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_ip_time (ip_address, attempt_time),
    INDEX idx_attempt_time (attempt_time)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create audit_log table for activity tracking
CREATE TABLE audit_log (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    action VARCHAR(100) NOT NULL,
    details TEXT,
    ip_address VARCHAR(45),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL,
    INDEX idx_user_action (user_id, action),
    INDEX idx_created_at (created_at),
    INDEX idx_action (action)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create stored procedure to clean old login attempts
DELIMITER //
CREATE PROCEDURE clean_old_login_attempts()
BEGIN
    DELETE FROM login_attempts 
    WHERE attempt_time < DATE_SUB(NOW(), INTERVAL 24 HOUR);
END//
DELIMITER ;

-- Create event to automatically clean old login attempts daily
CREATE EVENT IF NOT EXISTS clean_login_attempts_event
ON SCHEDULE EVERY 1 DAY
STARTS CURRENT_TIMESTAMP
DO CALL clean_old_login_attempts();

-- Insert default users (CHANGE THESE PASSWORDS IMMEDIATELY!)
-- Admin user (password: admin123)
INSERT INTO users (username, email, password, role, is_active) VALUES 
('admin', 'admin@fieldservice.com', '$2y$12$PanhPgD/PtQIFrWAtBtb3uZ.U6qjwksJfbALMDDMkMYHhMbLnpheq', 'admin', 1);

-- Tech users (password: tech123)
INSERT INTO users (username, email, password, role, is_active) VALUES 
('tech1', 'tech1@fieldservice.com', '$2y$12$.GuvBaxT/ZoRDrxST8WPzetNLHGyjog1/B7TQ7OZziTy903MbgjpS', 'tech', 1),
('tech2', 'tech2@fieldservice.com', '$2y$12$.GuvBaxT/ZoRDrxST8WPzetNLHGyjog1/B7TQ7OZziTy903MbgjpS', 'tech', 1);

-- Initial audit log entry
INSERT INTO audit_log (user_id, action, details, ip_address) 
VALUES (1, 'system', 'Database initialized with security features', '127.0.0.1');

-- Grant stored procedure permissions (adjust user as needed)
-- GRANT EXECUTE ON PROCEDURE field_service_calculator.clean_old_login_attempts TO 'your_app_user'@'localhost';

-- Enable event scheduler (run as root/admin)
-- SET GLOBAL event_scheduler = ON;