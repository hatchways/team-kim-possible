const express = require("express");
const router = express.Router();
const { Cars } = require("../models/cars.models");
const { User } = require("../models/user.models");
const { Flights } = require("../models/flights.models");
const { Hotels } = require("../models/hotels.models");
const objectId = require("mongodb").ObjectID;

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

//Get car by user
router.get("/checkout", async function (req, res, next) {
  const user = await User.findOne({
    name: "JOE",
  });
  Cars.findOne({ _id: user.car }, function (err, result) {
    if (err) {
      return res.status(400);
    } else {
      return result;
    }
  });
});

//Add car to checkout
router.post("/checkout", async function (req, res, next) {
  const car = await Cars.findOne({
    name: "Honda",
  });

  var myquery = { name: "JOE" };
  var newvalues = { $set: { name: "JOE", car: car._id } };
  User.updateOne(myquery, newvalues, function (err, result) {
    if (err) {
      return res.status(400);
    } else {
      return res.status(200);
    }
  });
});

router.delete("/checkout", async function (req, res, next) {
  const nullId = "000000000000000000000000";

  var myquery = { name: "JOE" };
  var newvalues = {
    $set: { car: objectId(nullId) },
  };
  User.updateOne(myquery, newvalues, function (err, result) {
    if (err) {
      return res.status(400);
    } else {
      return res.status(200);
    }
  });
});

module.exports = router;
