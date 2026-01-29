const express = require('express');
const AuthRouter = express.Router();
const pool = require('../config/db.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



// ---- Helpers ----
const JWT_SECRET = process.env.JWT_SECRET || 'dev_change_me'; // put a real secret in .env in prod

function signToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
}

// ---- AUTH: REGISTER (hash the password) ----

AuthRouter.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body || {};

    // basic validation
    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: 'name, email, password are required' });
    }

    // check if email already exists
    const [exists] = await pool.query(
      'SELECT id FROM users WHERE email = ? LIMIT 1',
      [email]
    );
    if (exists.length) {
      return res.status(409).json({ success: false, message: 'Email already registered' });
    }

    // hash password
    const hash = await bcrypt.hash(password, 12);

    // insert user
    const [result] = await pool.query(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      [name, email, hash]
    );

    return res.status(201).json({ success: true, id: result.insertId });
  } catch (err) {
    // race-condition safety if a unique index exists on email
    if (err?.code === 'ER_DUP_ENTRY') {
      return res.status(409).json({ success: false, message: 'Email already registered' });
    }
    console.error('REGISTER error:', err);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
});


// ---- AUTH: LOGIN (compare bcrypt, return JWT) ----
AuthRouter.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body || {};
    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Email and password required' });
    }

    const [rows] = await pool.query(
      'SELECT id, name, email, password FROM users WHERE email = ? LIMIT 1',
      [email]
    );
    if (!rows.length) return res.status(401).json({ success: false, message: 'Invalid email or password' });

    const user = rows[0];
    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(401).json({ success: false, message: 'Invalid email or password' });

    const token = signToken({ sub: user.id, email: user.email });
    return res.json({ success: true, token, user: { id: user.id, name: user.name, email: user.email } });
  } catch (err) {
    console.error('LOGIN error:', err);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
});

AuthRouter.get('/userslist', async (_req, res) => {
  try {
    const [rows] = await pool.query('SELECT id, name, email, password FROM users');
    res.json({ success: true, data: rows });
  } catch (err) {
    console.error('GET /api/userslist error:', err);
    res.status(500).json({ success: false, message: 'DB error' });
  }
});


AuthRouter.post("/forgot-password", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password required" });
  }

  const [users] = await pool.query(
    "SELECT id FROM users WHERE email = ?",
    [email]
  );

  if (!users.length) {
    return res.status(404).json({ message: "Email not found" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await pool.query(
    "UPDATE users SET password = ? WHERE email = ?",
    [hashedPassword, email]
  );

  res.json({ message: "Password updated successfully. Redirecting..." });
});


module.exports = AuthRouter;