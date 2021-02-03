const db = require("../data/db-config");

module.exports = {
  validateListing,
  validateId,
  validateEditListing,
};

async function validateListing(req, res, next) {
  const {
    listing_name,
    listing_description,
    listing_price,
    marketplace_id,
    user_id,
  } = req.body;

  if (
    !listing_name ||
    !listing_description ||
    !listing_price ||
    !marketplace_id ||
    !user_id
  ) {
    res.status(401).json({
      message:
        "Missing credential(s): listing_name, listing_description, listing_price, marketplace_id and/or user_id",
    });
  } else {
    return next();
  }
}

async function validateEditListing(req, res, next) {
  const {
    listing_name,
    listing_description,
    listing_price,
    marketplace_id,
  } = req.body;
  if (
    !listing_name ||
    !listing_description ||
    !listing_price ||
    !marketplace_id
  ) {
    res.status(401).json({
      message:
        "Missing credential(s): listing_name, listing_description, listing_price, and/or marketplace_id",
    });
  } else {
    return next();
  }
}

async function validateId(req, res, next) {
  const { listing_id } = req.params;
  if (!listing_id) {
    return res.status(400).json({ message: "Please provide a valid ID" });
  }
  const listingWithId = await db("listings")
    .where("listing_id", listing_id)
    .first();
  if (!listingWithId) {
    return res
      .status(400)
      .json({ message: `Listing with ID ${listing_id} does not exist` });
  } else {
    return next();
  }
}
