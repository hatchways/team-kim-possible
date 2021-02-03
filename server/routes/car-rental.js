// For many of the routes you will need to pass JSON data that includes an email associated with the user. Ex: { "email" : "email23@gmail.com "}
// To add a car to the checkout, your req.body needs to have a car name. Ex: { "car" : "{"name" : "Honda"}" }
const express = require("express");
const router = express.Router();
const { Cars } = require("../models/cars.models");
const { User } = require("../models/user.models");
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
//----Checkout------
//Get car by user
router.get("/checkout", async function (req, res, next) {
  const user = await User.findOne({
    email: req.body.email,
  });
  Cars.findOne({ _id: user.car }, function (err, result) {
    if (err) {
      return res.status(400);
    } else {
      res.status(200).send(result);
    }
  });
});
//Add a car to the user's checkout
router.post("/checkout", async function (req, res, next) {
  const car = await Cars.findOne({
    name: req.body.car.name,
  });
  User.updateOne(
    { email: req.body.email },
    { $set: { car: car._id } },
    function (err, result) {
      if (err) {
        return res.status(400);
      } else {
        return res.status(200);
      }
    }
  );
});
//Delete car from checkout
router.delete("/checkout", async function (req, res, next) {
  const nullId = "000000000000000000000000";
  User.updateOne(
    { email: req.body.email },
    {
      $set: { car: objectId(nullId) },
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
