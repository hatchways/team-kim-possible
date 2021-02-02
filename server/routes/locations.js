const express = require("express");
const router = express.Router();
const { Location } = require("../models/location.models");

// route /locations
router.get("/", async function (req, res, next) {
  try {
    const locations = await Location.find();
    res.status(200).json({ locations });
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
