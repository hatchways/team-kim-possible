const express = require("express");
const router = express.Router();
const { Cars } = require("../models/cars.models");

router.get("/", async function (req, res, next) {
  Cars.find(function (err, result) {
    if (err) {
      return res.status(400);
    } else {
      carList = result;
      try {
        res.status(200).send({ carList });
      } catch (e) {
        res.status(400).send(e);
      }
    }
  });
});

module.exports = router;
