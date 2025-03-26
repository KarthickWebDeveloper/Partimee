const jwt = require('jsonwebtoken');

const protect = (roles = []) => (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    if (roles.length && !roles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Access Denied: Insufficient Permissions' });
    }
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid Token' });
  }
};

module.exports = { protect };
