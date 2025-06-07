// Authentication enabled - all routes require login
// Credentials are stored in .env file

require('dotenv').config();
const express = require('express');
const session = require('express-session');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const path = require('path');
const bcrypt = require('bcrypt');

const app = express();
const PORT = process.env.PORT || 3000;

// Security middleware
app.use(helmet());

// Rate limiting for login attempts
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per windowMs
  message: 'Too many login attempts, please try again later.'
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Session configuration
app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

// Auth middleware
function requireAuth(req, res, next) {
  if (!req.session.userId) {
    return res.redirect('/login');
  }
  next();
}

// Routes
app.get('/', (req, res) => {
  res.redirect('/login');
});

app.get('/login', (req, res) => {
  if (req.session.userId) {
    return res.redirect('/field-calculator');
  }
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.post('/login', loginLimiter, async (req, res) => {
  const { email, password } = req.body;
  
  // Check credentials
  if (email === process.env.ADMIN_EMAIL) {
    try {
      const validPassword = await bcrypt.compare(password, process.env.ADMIN_PASSWORD_HASH);
      if (validPassword) {
        req.session.userId = email;
        // Handle both JSON and form-encoded responses
        if (req.headers['content-type'] === 'application/json') {
          return res.json({ success: true, redirect: '/field-calculator' });
        }
        return res.redirect('/field-calculator');
      }
    } catch (error) {
      console.error('Password comparison error:', error);
    }
  }
  
  res.status(401).send('Invalid credentials');
});

app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Session destruction error:', err);
    }
    res.redirect('/login');
  });
});

app.get('/field-calculator', requireAuth, (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'calculator.html'));
});

// Calculator API endpoint
app.post('/api/calc', requireAuth, (req, res) => {
  try {
    const calculatorConfig = require('./calculatorConfig.json');
    const { serviceType, materialCost, laborCategory, minutes, includeTax } = req.body;
    
    // Validate inputs
    if (!serviceType || !materialCost || !laborCategory || !minutes) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    
    // Get markup rate
    const markupKey = serviceType === 'residential' ? 'residentialMarkup' : 'commercialMarkup';
    const markup = calculatorConfig[markupKey];
    
    // Calculate material charge
    const materialCharge = materialCost / (1 - markup);
    
    // Get labor rate
    const laborRate = calculatorConfig.laborRates[laborCategory][minutes.toString()];
    if (!laborRate) {
      return res.status(400).json({ error: 'Invalid labor minutes' });
    }
    
    // Calculate totals
    const laborCharge = laborRate;
    let total = materialCharge + laborCharge;
    
    if (includeTax) {
      total = total * (1 + calculatorConfig.salesTax);
    }
    
    res.json({
      materialCharge: Math.round(materialCharge * 100) / 100,
      laborCharge: Math.round(laborCharge * 100) / 100,
      total: Math.round(total * 100) / 100
    });
  } catch (error) {
    console.error('Calculation error:', error);
    res.status(500).json({ error: 'Calculation failed' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});