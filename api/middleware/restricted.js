const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../../config/secrets");

module.exports = {
  verifyAuth,
};

function verifyAuth(req, res, next) {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, jwtSecret, (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: "token invalid" });
      } else {
        req.decodedJwt = decoded;
        next();
      }
    });
  } else {
    return res.status(401).json({ error: "token required" });
  }
}
