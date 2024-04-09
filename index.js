const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
app.use(express.json());

// Middleware to authenticate the JWT token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (token == null) return res.sendStatus(401);
  
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Login endpoint to generate a JWT token
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  const payload = { username };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

  res.json({ token });
});

// Arithmetic operation endpoints
app.get('/add', authenticateToken, (req, res) => {
  const { number1, number2 } = req.query;
  res.json({ result: Number(number1) + Number(number2) });
});

app.get('/subtract', authenticateToken, (req, res) => {
  const { number1, number2 } = req.query;
  res.json({ result: Number(number1) - Number(number2) });
});

app.get('/multiply', authenticateToken, (req, res) => {
  const { number1, number2 } = req.query;
  res.json({ result: Number(number1) * Number(number2) });
});

app.get('/divide', authenticateToken, (req, res) => {
  const { number1, number2 } = req.query;
  
  if (number2 == 0) {
    return res.status(400).json({ error: "Cannot divide by zero" });
  }
  res.json({ result: Number(number1) / Number(number2) });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));