const db = require("../data/db-config");

module.exports = {
  findByEmail,
};

async function findByEmail(email) {
  return await db("users").where("email", email);
}
