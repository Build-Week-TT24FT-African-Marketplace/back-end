const express = require("express");

const router = express.Router();

const { validateListing } = require("../middleware/listings-inputs");

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

router.post("/", validateListing, (req, res) => {
  const listing = req.body;
  Listings.add(listing)
    .then((listing) => {
      res.status(201).json(listing);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
