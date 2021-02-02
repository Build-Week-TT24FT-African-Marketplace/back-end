const db = require("../data/db-config");

module.exports = {
  isValid,
};

async function isValid(req, res, next) {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json("username and password required");
  } else {
    return next();
  }
}
