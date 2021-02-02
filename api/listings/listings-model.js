const db = require("../data/db-config");

module.exports = {
  getAll,
  getByUser,
};

function getAll() {
  return db("listings");
}

function getByUser(id) {
  return db("listings").where("user_id", id);
}
