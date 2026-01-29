const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const authHeader = req.header("Authorization");

  if (!authHeader) return res.status(401).json("No token");

  const token = authHeader.split(" ")[1]; // "Bearer TOKEN"

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    console.log("USER FROM TOKEN:", verified);
    next();
  } catch (err) {
    res.status(400).json("Invalid token");
  }
};
