-- Security Updates for Field Service Calculator
-- Run this script to add security features to existing database

-- Create login_attempts table for rate limiting
CREATE TABLE IF NOT EXISTS login_attempts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ip_address VARCHAR(45) NOT NULL,
    username VARCHAR(50),
    attempt_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_ip_time (ip_address, attempt_time),
    INDEX idx_attempt_time (attempt_time)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Create audit_log table for activity tracking
CREATE TABLE IF NOT EXISTS audit_log (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    action VARCHAR(100) NOT NULL,
    details TEXT,
    ip_address VARCHAR(45),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL,
    INDEX idx_user_action (user_id, action),
    INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Update calculations table to use ENUM for labor_category
ALTER TABLE calculations 
MODIFY COLUMN labor_category ENUM('Regular Time', 'Time and a Half', 'Double Time') NOT NULL;

-- Add constraints to calculations table
ALTER TABLE calculations 
ADD CONSTRAINT chk_material_cost CHECK (material_cost >= 0 AND material_cost <= 999999.99),
ADD CONSTRAINT chk_minutes CHECK (minutes > 0 AND minutes <= 1440),
ADD CONSTRAINT chk_labor_rate CHECK (labor_rate > 0),
ADD CONSTRAINT chk_total_amount CHECK (total_amount >= 0);

-- Add last_login and failed_login_count to users table
ALTER TABLE users 
ADD COLUMN last_login TIMESTAMP NULL AFTER is_active,
ADD COLUMN failed_login_count INT DEFAULT 0 AFTER last_login,
ADD COLUMN locked_until TIMESTAMP NULL AFTER failed_login_count;

-- Create stored procedure to clean old login attempts
DELIMITER //
CREATE PROCEDURE IF NOT EXISTS clean_old_login_attempts()
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

-- Insert initial audit log entry
INSERT INTO audit_log (user_id, action, details, ip_address) 
VALUES (NULL, 'system', 'Security updates applied', '127.0.0.1');