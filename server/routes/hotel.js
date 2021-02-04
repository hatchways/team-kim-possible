// For many of the routes you will need to pass JSON data that includes an email associated with the user. Ex: { "email" : "email23@gmail.com "}
// To add a hotel to the checkout, your req.body needs to have a hotel name. Ex: { "hotel" : "{"name" : "Seoul Troll Resort"}" }
const express = require("express");
const router = express.Router();
const { Hotels } = require("../models/hotels.models");
const { User } = require("../models/user.models");

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
//----Checkout------
//Get hotel by user
router.get("/checkout", async function (req, res, next) {
  const user = await User.findOne({
    email: req.body.email,
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
    name: req.body.hotel.name,
  });
  User.updateOne(
    { email: req.body.email },
    { $set: { hotel: hotel._id } },
    function (err, result) {
      if (err) {
        return res.status(400);
      } else {
        return res.status(200);
      }
    }
  );
});
//Delete hotel from checkout
router.delete("/checkout", async function (req, res, next) {
  const nullId = "000000000000000000000000";
  User.updateOne(
    { email: req.body.email },
    {
      $set: { hotel: objectId(nullId) },
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
