# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project: Field Tech Flat-Rate Calculator

A login-protected web calculator for field technicians to compute service prices. The calculator is accessible only via a hidden URL with authentication.

## Tech Stack & Dependencies

- **Backend**: Node.js + Express (v4.18.2)
- **Authentication**: Session-based auth (express-session v1.17.3)
- **Security**: helmet (v7.1.0), express-rate-limit (v7.1.5), bcrypt (v5.1.1)
- **Frontend**: Plain HTML/JS (decided against React for simplicity)
- **Configuration**: JSON-based config for rates and markups
- **Environment**: dotenv (v16.3.1)

## Project Structure (APPLICATION COMPLETE)

```
/
├── server.js              # Express server with auth middleware ✓
├── calculatorConfig.json  # Markup rates and labor tables ✓
├── package.json          # Dependencies and scripts ✓
├── .env                  # Environment variables (gitignored) ✓
├── .env.example          # Template for environment setup ✓
├── .gitignore           # Protect sensitive files ✓
├── robots.txt           # Prevent search indexing ✓
├── public/              # Static assets directory ✓
│   ├── css/            
│   │   └── styles.css   # Responsive styles ✓
│   ├── js/              
│   │   └── calculator.js # Frontend calculator logic ✓
│   ├── login.html       # Login form ✓
│   └── calculator.html  # Calculator interface ✓
└── planning.md          # Implementation roadmap ✓
```

## Application Status

**✅ FULLY FUNCTIONAL** - All core features are implemented and working:
- Secure login with rate limiting
- Protected calculator route
- Material cost calculations with markups
- Labor rate lookups
- Tax calculations
- Responsive mobile-friendly design

## Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run production server
npm start

# Run tests
npm test

# Lint code
npm run lint
```

## Key Implementation Details

### Authentication Middleware
```javascript
function requireAuth(req, res, next) {
  if (!req.session?.userId) {
    return res.redirect('/login');
  }
  next();
}
```

### Calculator Config Structure
```json
{
  "residentialMarkup": 0.45,
  "commercialMarkup": 0.55,
  "laborRates": {
    "regular": { "1": 2.50, "2": 5.00 },
    "timeAndAHalf": { /* rates */ },
    "double": { /* rates */ }
  },
  "salesTax": 0.07
}
```

### Calculation Formula
- **Material Charge**: `materialCost / (1 - markup)`
- **Labor Charge**: Lookup from `laborRates[category][minutes]`
- **Total**: Material + Labor (+ optional tax)

## Routes & Endpoints

| Route | Method | Auth | Purpose |
|-------|--------|------|---------|
| `/login` | GET | No | Login form |
| `/login` | POST | No | Authenticate |
| `/logout` | GET | Yes | Clear session |
| `/field-calculator` | GET | Yes | Calculator UI |
| `/api/calc` | POST | Yes | Perform calculation |

## Environment Variables

```
PORT=3000
NODE_ENV=development|production
SESSION_SECRET=your-secret-key
ADMIN_EMAIL=admin@fieldtech.com  # Default in .env
ADMIN_PASSWORD_HASH=$2b$10$...   # Bcrypt hash of password
```

### Default Development Credentials
- Email: `admin@fieldtech.com`
- Password: `fieldtech123`
- ⚠️ **CHANGE THESE IN PRODUCTION**

## Security Considerations (Implemented in Phase 1)

- ✓ HTTPS enforcement via secure cookies in production
- ✓ Credentials stored in environment variables
- ✓ robots.txt blocking all crawlers
- ✓ Rate limiting on login (5 attempts per 15 minutes)
- ✓ Bcrypt for password hashing
- ✓ Helmet.js for security headers
- ✓ HttpOnly cookies for sessions
- ✓ 24-hour session timeout

## Phase 2 Implementation Details

### Login Page Features
- Responsive design with mobile-first approach
- Client-side form validation
- Async form submission with fetch API
- Loading states during authentication
- Error handling for rate limiting (429) and invalid credentials
- Security meta tags to prevent indexing

## Testing Scenarios

1. **Auth Flow**: Login → Access calculator → Logout
2. **Calculations**: Test both residential and commercial with various labor categories
3. **Edge Cases**: Invalid credentials, expired sessions, malformed calc requests

## Common Tasks

### Adding New Labor Categories
1. Update `calculatorConfig.json` with new category rates
2. Add option to frontend labor category selector
3. No server restart needed if config is reloaded dynamically

### Changing Markup Rates
Edit values in `calculatorConfig.json`:
- `residentialMarkup`: For residential jobs
- `commercialMarkup`: For commercial jobs

### Debugging Calculations
Check `/api/calc` endpoint logs for:
- Input parameters received
- Markup rate applied
- Labor rate lookup
- Final calculation breakdown