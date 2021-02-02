const db = require("../data/db-config");

module.exports = {
  isValidRegister,
  isUnique,
  isValidLogin,
};

async function isValidRegister(req, res, next) {
  const { user_first_name, user_email, user_password, role } = req.body;

  if (!user_first_name || !user_email || !user_password || !role) {
    return res
      .status(400)
      .json("First name, email, password, and role required.");
  } else {
    return next();
  }
}

async function isUnique(req, res, next) {
  const { user_email } = req.body;
  const returnedUser = await db("users")
    .where("user_email", user_email)
    .first();

  if (!returnedUser) {
    return next();
  } else {
    return res.status(400).json("email taken");
  }
}

async function isValidLogin(req, res, next) {
  const { user_email, user_password } = req.body;

  if (!user_email || !user_password) {
    return res.status(400).json("Missing credentials email or password.");
  } else {
    return next();
  }
}
