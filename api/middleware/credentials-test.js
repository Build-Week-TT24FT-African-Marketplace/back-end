const db = require("../data/db-config");

module.exports = {
  isValidRegister,
  isUnique,
};

async function isValidRegister(req, res, next) {
  const { user_first_name, user_email, user_password, role } = req.body;

  if (!user_first_name || !user_email || !user_password || !role) {
    return res
      .status(400)
      .json("first name, email, password, and role required");
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
