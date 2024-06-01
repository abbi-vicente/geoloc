const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) return res.status(403).json({ error: "Access Denied." });

  try {
    const decoded = jwt.verify(token.substring(7), process.env.JWT_SECRET);

    req.user = { userId: decoded.id };

    next();
  } catch (error) {
    res.status(403).json({ error: "Access Denied" });
  }
};

module.exports = { authMiddleware };
