module.exports = {
  validateListing,
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
        "missing credential(s): listing_name, listing_description, listing_price, marketplace_id and/or user_id",
    });
  } else {
    return next();
  }
}
