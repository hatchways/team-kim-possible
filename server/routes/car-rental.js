const express = require("express");
const router = express.Router();
const { Cars } = require("../models/cars.models");
const { User } = require("../models/user.models");
const { Flights } = require("../models/flights.models");
const { Hotels } = require("../models/hotels.models");

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

//Checkout
//Add car to checkout
router.post("/", async function (req, res, next) {
  const car = await Cars.findOne({
    name: "Honda",
  });

  var myquery = { name: "JOE" };
  var newvalues = { $set: { name: "updated", car: car._id } };
  User.updateOne(myquery, newvalues, function (err, result) {
    if (err) {
      return res.status(400);
    } else {
      return res.status(200);
    }
  });
});

module.exports = router;
