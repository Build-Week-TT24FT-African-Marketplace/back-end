const db = require("../data/db-config");

module.exports = {
  getAll,
  add,
};

async function getAll() {
  return await db("listings");
}

async function add(listing) {
  return await db("listings").insert(listing);
}
