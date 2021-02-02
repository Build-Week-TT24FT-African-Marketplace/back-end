const express = require("express");

const router = express.Router();

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

module.exports = router;
