const db = require("../data/db-config");

module.exports = {
  add,
  findAll,
  findByEmail,
};

async function findAll() {
  const users = await db("users");
  return users;
}

async function add(user) {
  const id = await db("users").insert(user);

  return id;
}

async function findByEmail(user_email) {
  const user = await db("users").where("user_email", user_email).first();
  return user;
}
