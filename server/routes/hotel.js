const express = require("express");
const router = express.Router();
const { Hotels } = require("../models/hotels.models");

router.get("/", async function (req, res, next) {
  Hotels.find(function (err, result) {
    if (err) {
      return res.status(400);
    } else {
      hotelList = result;
      try {
        res.status(200).send({ hotelList });
      } catch (e) {
        res.status(400).send(e);
      }
    }
  });
});

module.exports = router;
