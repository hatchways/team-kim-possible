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
router.post("/", async function (req, res, next) {
  carData = {
    name: "testyota",
    rate: "33",
    total: "40",
    imageUrl: "toyota",
  };
  const car = new Cars(carData);
  await car.save();

  var myquery = { name: "updated" };
  var newvalues = { $set: { name: "alex123", car: car._id } };
  User.updateOne(myquery, newvalues, function (err, result) {
    if (err) {
      return res.status(400);
    } else {
      console.log("test");
    }
  });
});

module.exports = router;
