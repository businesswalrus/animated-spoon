# Field Service Calculator - Deployment Guide

## Phase 2 Implementation Summary

Phase 2 has successfully implemented the following features:

### Week 1 - Field Tech Experience ✓
- **Mobile-First CSS**: Touch-friendly interface with 44px minimum tap targets
- **Live Preview**: Real-time calculation updates with 300ms debouncing
- **Swipe Gestures**: Swipe right to reset form functionality
- **Offline Detection**: Automatic detection and user notification
- **Responsive Tables**: Horizontal scrolling for calculation history

### Week 2 - Admin Features ✓
- **Admin Dashboard**: Real-time statistics with 5-minute caching
- **Advanced Filtering**: User, date range, and service type filters
- **Pagination**: 50 results per page with navigation
- **CSV Export**: Chunked processing for large datasets
- **User Management**: Create, activate/deactivate, and password reset

### Performance Optimizations
- Debounced input handlers for smooth mobile experience
- Cached statistics queries (5-minute TTL)
- Chunked CSV export (1000 rows at a time)
- Optimized SQL queries with proper indexes

## Pre-Deployment Checklist

### 1. Environment Setup
```bash
# Set environment variables
export APP_ENV=production
export DB_HOST=your_db_host
export DB_NAME=field_service_calculator
export DB_USER=your_db_user
export DB_PASS=your_secure_password
```

### 2. File Permissions
```bash
# Set proper permissions
chmod 644 *.php css/*.css js/*.js
chmod 755 . css js sql
chmod 600 .env  # If using .env file
```

### 3. Database Preparation
```bash
# Ensure all security updates are applied
mysql -u your_user -p field_service_calculator < sql/security_updates.sql

# Verify indexes exist for performance
mysql -u your_user -p field_service_calculator -e "SHOW INDEX FROM calculations;"
mysql -u your_user -p field_service_calculator -e "SHOW INDEX FROM users;"
```

### 4. Web Server Configuration

#### Apache (.htaccess)
```apache
# Security headers
Header set X-Content-Type-Options "nosniff"
Header set X-Frame-Options "DENY"
Header set X-XSS-Protection "1; mode=block"
Header set Referrer-Policy "strict-origin-when-cross-origin"

# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/css text/javascript application/javascript
</IfModule>

# Cache static assets
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

#### Nginx
```nginx
server {
    listen 443 ssl http2;
    server_name your-domain.com;
    
    # SSL configuration
    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;
    
    # Security headers
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-Frame-Options "DENY" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    
    # PHP configuration
    location ~ \.php$ {
        fastcgi_pass unix:/var/run/php/php7.4-fpm.sock;
        fastcgi_index index.php;
        include fastcgi_params;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
    }
    
    # Static asset caching
    location ~* \.(css|js|jpg|jpeg|png|gif|ico)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
}
```

## Testing Protocol

### 1. Functionality Testing
- [ ] Calculator performs accurate calculations
- [ ] Live preview updates correctly
- [ ] Tax calculations are accurate (7%)
- [ ] Labor rates calculate correctly
- [ ] Calculations save to database
- [ ] Field techs see only their last 10 calculations
- [ ] Admin sees all calculations with filters
- [ ] Statistics display correctly
- [ ] CSV export includes all data
- [ ] User management functions work
- [ ] Password reset functionality

### 2. Mobile Testing
Test on the following devices:
- [ ] iPhone 12/13/14 (Safari)
- [ ] Samsung Galaxy S21/S22 (Chrome)
- [ ] iPad Pro (Safari)
- [ ] Android tablets

Key mobile tests:
- [ ] Touch targets are at least 44x44px
- [ ] Forms are easy to fill on mobile
- [ ] Tables scroll horizontally
- [ ] Swipe gestures work
- [ ] Offline detection displays

### 3. Performance Testing
- [ ] Page load time <3s on 3G
- [ ] First contentful paint <1.5s
- [ ] Time to interactive <3s
- [ ] JavaScript bundle <50KB
- [ ] No layout shifts

### 4. Security Testing
- [ ] All Phase 1 security measures intact
- [ ] Rate limiting works (5 attempts/15 min)
- [ ] Session timeout after 1 hour
- [ ] CSRF protection on all forms
- [ ] XSS protection verified
- [ ] SQL injection prevention tested
- [ ] Security headers present

## Monitoring Setup

### 1. Error Logging
```php
// Verify error logging is configured
tail -f /var/log/app/php-errors.log
```

### 2. Performance Monitoring
```bash
# Monitor page load times
curl -w "@curl-format.txt" -o /dev/null -s https://your-domain.com/index.php

# curl-format.txt contents:
time_namelookup:  %{time_namelookup}\n
time_connect:  %{time_connect}\n
time_appconnect:  %{time_appconnect}\n
time_pretransfer:  %{time_pretransfer}\n
time_redirect:  %{time_redirect}\n
time_starttransfer:  %{time_starttransfer}\n
time_total:  %{time_total}\n
```

### 3. Database Monitoring
```sql
-- Check slow queries
SELECT * FROM audit_log WHERE action = 'calculation_saved' 
AND created_at > DATE_SUB(NOW(), INTERVAL 1 HOUR)
ORDER BY created_at DESC;

-- Monitor calculation volume
SELECT DATE(created_at) as date, COUNT(*) as calculations 
FROM calculations 
WHERE created_at > DATE_SUB(NOW(), INTERVAL 7 DAY)
GROUP BY DATE(created_at);
```

## Rollback Plan

If issues occur after deployment:

### 1. Quick Rollback
```bash
# Restore previous version
cp -r /backup/previous-version/* /var/www/html/

# Clear any caches
rm -rf /tmp/cache/*
```

### 2. Database Rollback
```bash
# If database changes were made
mysql -u your_user -p field_service_calculator < /backup/database-backup.sql
```

### 3. Emergency Maintenance Mode
Add to top of index.php:
```php
die('<h1>System Maintenance</h1><p>We\'ll be back shortly.</p>');
```

## Post-Deployment Verification

### 1. Functional Checks
- [ ] Login as field tech - verify calculator works
- [ ] Login as admin - verify dashboard loads
- [ ] Create a test calculation
- [ ] Export CSV data
- [ ] Create a test user

### 2. Performance Checks
- [ ] Check page load times
- [ ] Verify caching is working
- [ ] Monitor error logs

### 3. Security Audit
- [ ] Run OWASP ZAP scan
- [ ] Check security headers
- [ ] Verify HTTPS is enforced
- [ ] Test rate limiting

## Maintenance Tasks

### Daily
- Review error logs
- Check calculation volume
- Monitor disk space

### Weekly
- Review audit logs
- Check for unusual activity
- Backup database

### Monthly
- Review performance metrics
- Update dependencies
- Security patches

## Support Information

### Common Issues

**Issue**: Slow page loads
**Solution**: Check database indexes, enable query caching

**Issue**: CSV export timeout
**Solution**: Increase PHP max_execution_time, check memory_limit

**Issue**: Mobile layout issues
**Solution**: Clear browser cache, check CSS file is loaded

### Contact Information
- Technical Support: [your-email]
- Emergency Contact: [phone-number]
- Documentation: /CLAUDE.md

---
*Last Updated: [Current Date]*
*Version: 2.0 (Phase 2 Complete)*