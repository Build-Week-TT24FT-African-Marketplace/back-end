const express = require("express");

const router = express.Router();

const {
  validateListing,
  validateEditListing,
  validateId,
} = require("../middleware/listings-inputs");

const { verifyAuth } = require("../middleware/restricted");

const Listings = require("../listings/listings-model");

router.get("/", (req, res) => {
  Listings.getAll()
    .then((listings) => {
      res.status(200).json(listings);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

router.post("/", verifyAuth, validateListing, (req, res) => {
  const listing = req.body;
  Listings.add(listing)
    .then((listings) => {
      res.status(201).json(listings);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

router.put(
  "/:listing_id",
  verifyAuth,
  validateId,
  validateEditListing,
  (req, res) => {
    const { listing_id } = req.params;
    const listing = req.body;
    Listings.edit(listing, listing_id)
      .then((listings) => {
        res.status(201).json(listings);
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });
  }
);

router.delete("/:listing_id", verifyAuth, validateId, (req, res) => {
  const { listing_id } = req.params;
  Listings.remove(listing_id)
    .then((response) => {
      res.status(201).json({ "deleted listing": response });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

module.exports = router;
