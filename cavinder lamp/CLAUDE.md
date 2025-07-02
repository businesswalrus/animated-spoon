# Field Service Calculator Web Application

## Phase 1 Completed - Security Hardening ✓

Successfully implemented comprehensive security fixes including:
- Environment-based configuration with production/development detection
- Database-backed rate limiting (5 attempts/15 minutes) to prevent brute force attacks
- Security headers (CSP, X-Frame-Options, HSTS) for defense against common web vulnerabilities
- Enhanced session management with 1-hour timeout and automatic regeneration
- Comprehensive input validation with proper bounds checking
- Audit logging system tracking all security events with IP addresses
- Removed all critical vulnerabilities: hardcoded credentials, exposed error reporting, and weak validation

The application now follows OWASP best practices and is ready for production deployment with proper environment configuration.

## Phase 2 Completed - Mobile Experience & Admin Features ✓

Successfully delivered mobile-first design and admin capabilities:
- **Mobile Optimization**: Touch-friendly interface with 44px targets, responsive CSS Grid layouts
- **Live Calculator Preview**: Real-time calculations with 300ms debouncing for smooth performance
- **Admin Dashboard**: Statistics with 5-minute caching, service breakdowns, top technicians
- **Advanced Filtering**: Multi-criteria filters (user, date, service type) with pagination
- **CSV Export**: Chunked processing for large datasets with proper memory management
- **User Management**: Create users, activate/deactivate, password reset functionality
- **Performance**: Optimized queries with indexes, efficient caching, streaming exports

The application now provides excellent mobile experience for field technicians and comprehensive admin tools while maintaining all Phase 1 security measures.

## Project Overview
A complete field service calculator web application using PHP/MySQL (LAMP stack) with authentication, role-based access, and calculation tracking.

## Core Requirements

### Authentication System
- No public registration - users created internally only
- Session-based authentication with proper security

### User Roles
1. **Field Techs**: Can only access the calculator and view their own recent calculations (last 10)
2. **Admins**: Can access calculator + admin dashboard + user management + view all calculations

### Technical Stack
- PHP 7.4+ with MySQL
- Responsive design for mobile devices (field techs use phones/tablets)
- Prepared statements for all database queries
- Password hashing with password_hash()
- XSS protection with htmlspecialchars()

## Database Schema

### users table
```sql
- id (INT, PRIMARY KEY, AUTO_INCREMENT)
- username (VARCHAR(50), UNIQUE)
- email (VARCHAR(100), UNIQUE)
- password (VARCHAR(255)) - hashed
- role (ENUM('tech', 'admin'))
- is_active (BOOLEAN, DEFAULT 1)
- created_at (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP)
```

### calculations table
```sql
- id (INT, PRIMARY KEY, AUTO_INCREMENT)
- user_id (INT, FOREIGN KEY)
- service_type (ENUM('Residential', 'Commercial'))
- material_cost (DECIMAL(10,2))
- labor_category (VARCHAR(50))
- minutes (INT)
- labor_rate (DECIMAL(10,2))
- labor_charge (DECIMAL(10,2))
- include_tax (BOOLEAN)
- tax_amount (DECIMAL(10,2))
- total_amount (DECIMAL(10,2))
- created_at (TIMESTAMP, DEFAULT CURRENT_TIMESTAMP)
```

## Calculator Specifications

### Input Fields
1. **Service Type**: Dropdown (Residential, Commercial)
2. **Material Cost**: Number input for dollar amount
3. **Labor Category**: Dropdown (Regular Time, Time and a Half, Double Time)
4. **Labor Time**: Dropdown with options: 1, 2, 3, 4, 5, 10, 15, 20, 25, 30, 45, 60, 90, 120 minutes
5. **Include Sales Tax**: Checkbox for 7% tax

### Labor Rates
- Regular Time: $165/hour
- Time and a Half: $247.50/hour  
- Double Time: $330/hour

### Results Display
- Material Charge
- Labor Charge
- Total (with tax if applicable)

### Features
- Live calculation preview as user fills form
- Store calculation history with user and timestamp

## Required Pages

### login.php
- Login form with username/password
- Redirects based on role (tech → calculator, admin → dashboard)
- Error handling for invalid credentials

### index.php (Calculator)
- Requires login
- Calculator form with all specified fields
- Live preview of calculations
- Shows last 10 calculations for field techs
- Saves calculations to database

### admin.php (Admin Dashboard)
- Admin only access
- Shows all calculations with filters:
  - By tech user
  - Date range
  - Service type
- Statistics display:
  - Total calculations
  - Total revenue
  - Average ticket
- Export to CSV functionality

### manage_users.php
- Admin only access
- Create new users (username, email, password, role)
- Activate/deactivate users
- Reset passwords
- Admins can't deactivate themselves

### logout.php
- Destroys session
- Redirects to login

### config.php
- Database connection
- Common functions
- Security helpers

### export.php
- CSV export functionality
- Admin only access

## Default Users
1. Admin: username: admin, password: admin123
2. Tech 1: username: tech1, password: tech123
3. Tech 2: username: tech2, password: tech123

## File Structure
```
/project-root
├── login.php
├── index.php (calculator)
├── admin.php
├── manage_users.php
├── logout.php
├── config.php
├── export.php
├── css/
│   └── styles.css
├── js/
│   └── calculator.js
└── sql/
    └── database.sql
```

## UI/UX Requirements
- Clean, professional design
- Mobile-friendly responsive layout
- Clear error messages and success notifications
- Intuitive navigation
- Consistent styling across all pages

## Security Requirements
- All database queries use prepared statements
- Passwords hashed with password_hash()
- XSS protection on all output
- Session hijacking protection
- CSRF protection on forms
- Input validation and sanitization

## Testing Checklist
- [ ] Login with different roles works correctly
- [ ] Calculator performs accurate calculations
- [ ] Tax calculation is correct (7%)
- [ ] Labor rates calculate correctly based on time
- [ ] Calculations save to database
- [ ] Field techs see only their last 10 calculations
- [ ] Admin sees all calculations
- [ ] Filters work on admin dashboard
- [ ] Statistics are accurate
- [ ] CSV export works properly
- [ ] User management functions work
- [ ] Mobile responsive design works
- [ ] Security measures are in place