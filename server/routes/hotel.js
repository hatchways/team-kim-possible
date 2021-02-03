const express = require("express");
const router = express.Router();
const { Hotels } = require("../models/hotels.models");
const { User } = require("../models/user.models");
const { Flights } = require("../models/flights.models");

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

//Checkout

//Get hotel by user
router.get("/checkout", async function (req, res, next) {
  const user = await User.findOne({
    name: "JOE",
  });
  Hotels.findOne({ _id: user.hotel }, function (err, result) {
    if (err) {
      return res.status(400);
    } else {
      return result;
    }
  });
});
//Add hotel to checkout
router.post("/", async function (req, res, next) {
  const hotel = await Hotels.findOne({
    name: "Alila Ubud",
  });

  var myquery = { name: "JOE2" };
  var newvalues = { $set: { name: "JOE", hotel: hotel._id } };
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
    $set: { hotel: objectId(nullId) },
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
