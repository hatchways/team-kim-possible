const express = require("express");
const router = express.Router();
const { Trips } = require("../models/trips.models");
const { Flights } = require("../models/flights.models");
//Use this route to test anything. Delete prior to production
router.get("/test", async (req, res) => {
  flightData = {
    departureDate: Date.now(),
    returnDate: Date.now(),
    departureLocation: "NYC, USA",
    destinationLocation: "Vancouver, Canada",
    price: 50000,
  };
  const flight = new Flights(flightData);
  const flightObject = await flight.save();
  const testData = {
    email: "testEmail492@gmail.com",
    flight: flightObject._id,
    totalCost: 50000,
  };
  const trip = new Trips(testData);
  try {
    await trip.save();
    return res.status(200).json({
      success: true,
    });
  } catch (err) {
    console.log(err);
  }

  res.status(200).send("Use this page to test things");
});

module.exports = router;
