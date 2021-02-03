const db = require("../data/db-config");

module.exports = {
  getAll,
  add,
  findById,
  edit,
  remove,
};

async function getAll() {
  return await db("listings");
}

async function add(listing) {
  return await db("listings")
    .insert(listing)
    .then((message) => {
      if (message) {
        return db("listings");
      }
    });
}

async function findById(listing_id) {
  return await db("listings").where("listing_id", listing_id).first();
}

async function edit(listing_data, listing_id) {
  return await db("listings")
    .update(listing_data)
    .where("listing_id", listing_id)
    .then((message) => {
      if (message) {
        return db("listings");
      }
    });
}

async function remove(listing_id) {
  const targetListing = await db("listings").where("listing_id", listing_id);

  return await db("listings")
    .where("listing_id", listing_id)
    .del()
    .then(() => {
      return targetListing;
    });
}
