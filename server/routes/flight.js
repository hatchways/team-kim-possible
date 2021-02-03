const express = require("express");
const router = express.Router();
const { Hotels } = require("../models/hotels.models");
const { User } = require("../models/user.models");
const { Flights } = require("../models/flights.models");

//Checkout
//Create a flight and add it to checkout
router.post("/", async function (req, res, next) {
  flightData = {
    departureDate: "2020-01-01",
    returnDate: "2020-01-01",
    departureLocation: "USA",
    destinationLocation: "EUROPE",
    price: 1,
  };
  const flight = new Flights(flightData);
  await flight.save();

  var myquery = { name: "JOE2" };
  var newvalues = { $set: { name: "JOE", flight: flight._id } };
  User.updateOne(myquery, newvalues, function (err, result) {
    if (err) {
      return res.status(400);
    } else {
      return res.status(200);
    }
  });
});

module.exports = router;
