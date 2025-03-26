const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Middleware to protect routes for Admins only
const adminOnly = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user || user.role !== 'Admin') {
      return res.status(403).json({ message: 'Access Denied: Admins only' });
    }

    req.user = user; // Attach user info for further use
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = adminOnly;
