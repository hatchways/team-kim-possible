// For many of the routes you will need to pass JSON data that includes an email associated with the user. Ex: { "email" : "email23@gmail.com "}
// To add a flight to the checkout, you will need to pass flight information in the following format in your req.body data:
// {   "flightData" = {
//     "departureDate": "2020-01-01",
//     "returnDate": "2020-01-01",
//     "departureLocation": "USA",
//     "destinationLocation": "EUROPE",
//     "price": 1,
//   };
//  }

const express = require("express");
const router = express.Router();
const { User } = require("../models/user.models");
const { Flights } = require("../models/flights.models");
//----Checkout------
//Get Flight by user
router.get("/checkout", async function (req, res, next) {
  const user = await User.findOne({
    email: req.body.email,
  });
  Flights.findOne({ _id: user.flight }, function (err, result) {
    if (err) {
      return res.status(400);
    } else {
      return result;
    }
  });
});
//Create a flight for checkout
router.post("/", async function (req, res, next) {
  const flight = new Flights(req.body.flightData);
  await flight.save();
  User.updateOne(
    { email: req.body.email },
    { $set: { flight: flight._id } },
    function (err, result) {
      if (err) {
        return res.status(400);
      } else {
        return res.status(200);
      }
    }
  );
});
//Delete a flight from checkout
router.delete("/checkout", async function (req, res, next) {
  const nullId = "000000000000000000000000";
  User.updateOne(
    { email: req.body.email },
    {
      $set: { flight: objectId(nullId) },
    },
    function (err, result) {
      if (err) {
        return res.status(400);
      } else {
        return res.status(200);
      }
    }
  );
});

module.exports = router;
