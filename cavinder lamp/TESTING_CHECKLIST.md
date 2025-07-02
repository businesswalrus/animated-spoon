# Field Service Calculator - Testing Checklist

## Quick Test Commands

### Performance Testing
```bash
# Test page load time
time curl -s https://your-site.com/index.php > /dev/null

# Test with slow 3G network (using Chrome DevTools)
# Network throttling: Download 400kb/s, Upload 400kb/s, Latency 400ms
```

### Security Testing
```bash
# Test rate limiting (run 6 times quickly)
for i in {1..6}; do curl -X POST https://your-site.com/login.php -d "username=test&password=wrong"; done

# Check security headers
curl -I https://your-site.com/index.php
```

## Functional Testing Checklist

### 1. Authentication & Sessions
- [ ] Login with valid credentials (tech/admin)
- [ ] Login with invalid credentials
- [ ] Trigger rate limiting (5 failed attempts)
- [ ] Verify session timeout after 1 hour
- [ ] Logout functionality
- [ ] Access control (techs can't access admin pages)

### 2. Calculator Functionality
#### Field Tech View
- [ ] Service type dropdown works
- [ ] Material cost accepts valid numbers
- [ ] Material cost rejects negative values
- [ ] Material cost rejects values > $999,999.99
- [ ] Labor category shows correct rates
- [ ] Time dropdown shows all options
- [ ] Tax checkbox adds 7% correctly
- [ ] Live preview updates in real-time
- [ ] Calculation saves to database
- [ ] Recent calculations show (max 10)
- [ ] Form reset clears all fields

#### Mobile Specific
- [ ] All inputs are touch-friendly (44px targets)
- [ ] Dropdowns work on iOS/Android
- [ ] Number keyboard appears for cost input
- [ ] Swipe right resets form
- [ ] Tables scroll horizontally
- [ ] No zoom on input focus
- [ ] Offline message appears when disconnected

### 3. Admin Dashboard
- [ ] Statistics load correctly
- [ ] Total calculations accurate
- [ ] Total revenue accurate
- [ ] Average ticket calculated correctly
- [ ] Service type breakdown displays
- [ ] Top technicians list (when no filter)

#### Filtering
- [ ] Filter by technician
- [ ] Filter by date range
- [ ] Filter by service type
- [ ] Combined filters work
- [ ] Clear filters resets view
- [ ] URL preserves filter state

#### Pagination
- [ ] Shows 50 results per page
- [ ] Navigation buttons work
- [ ] Page number highlights current
- [ ] Filters persist across pages

### 4. CSV Export
- [ ] Export current filtered view
- [ ] File downloads with correct name
- [ ] Data matches displayed results
- [ ] Summary row calculates correctly
- [ ] Large exports don't timeout
- [ ] Special characters handled properly

### 5. User Management
#### Create User
- [ ] Username validation (3-50 chars, alphanumeric)
- [ ] Email validation
- [ ] Password minimum 6 characters
- [ ] Duplicate username rejected
- [ ] Duplicate email rejected
- [ ] Success message displays
- [ ] New user can login

#### User Actions
- [ ] Activate/deactivate users
- [ ] Cannot deactivate self
- [ ] Password reset modal works
- [ ] Password reset saves
- [ ] User list shows calculation count
- [ ] Role badges display correctly
- [ ] Status badges show active/inactive

## Cross-Browser Testing

### Desktop Browsers
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### Mobile Browsers
- [ ] iOS Safari (iPhone)
- [ ] iOS Safari (iPad)
- [ ] Chrome (Android phone)
- [ ] Chrome (Android tablet)

## Performance Metrics

### Target Metrics
- [ ] First Contentful Paint: <1.5s
- [ ] Time to Interactive: <3s
- [ ] Total Page Size: <500KB
- [ ] JavaScript Size: <50KB
- [ ] Number of Requests: <20

### Database Performance
- [ ] Statistics query: <100ms
- [ ] Calculation list: <200ms
- [ ] CSV export (1000 rows): <5s

## Security Validation

### OWASP Top 10
- [ ] SQL Injection: All inputs parameterized
- [ ] XSS: All output escaped
- [ ] CSRF: Tokens on all forms
- [ ] Authentication: Secure password hashing
- [ ] Access Control: Role-based permissions
- [ ] Security Headers: All present
- [ ] Rate Limiting: Working correctly
- [ ] Session Management: Secure configuration

### Additional Security
- [ ] HTTPS enforced
- [ ] Secure cookies (httpOnly, secure, sameSite)
- [ ] No sensitive data in logs
- [ ] No hardcoded credentials
- [ ] Error messages don't leak info

## Accessibility Testing

### Basic Accessibility
- [ ] All form fields have labels
- [ ] Color contrast meets WCAG AA
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Error messages clear
- [ ] Success messages announced

## Load Testing

### Expected Load
- 100 concurrent field techs
- 10 admin users
- 1000 calculations per day

### Test Scenarios
```bash
# Simple load test with curl
for i in {1..100}; do
  curl https://your-site.com/index.php &
done
wait
```

## Bug Report Template

```
**Environment**: [Browser/Device]
**User Role**: [Tech/Admin]
**Steps to Reproduce**:
1. 
2. 
3. 

**Expected Result**: 
**Actual Result**: 
**Screenshot**: [If applicable]
**Priority**: [Critical/High/Medium/Low]
```

## Final Deployment Checklist

### Pre-Deployment
- [ ] All tests passing
- [ ] No console errors
- [ ] No PHP warnings/errors
- [ ] Database backed up
- [ ] Deployment guide reviewed

### Post-Deployment
- [ ] Site accessible via HTTPS
- [ ] Login works for all roles
- [ ] Calculator saves data
- [ ] Admin dashboard loads
- [ ] No errors in logs

---
*Use this checklist for each deployment to ensure quality*