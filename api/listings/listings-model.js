const db = require("../data/db-config");

module.exports = {
  getAll,
};

async function getAll() {
  return db("listings");
}
