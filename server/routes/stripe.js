const express = require("express");
const router = express.Router();
const axios = require("axios");
const Stripe = require("stripe");
require("dotenv").config();
const { response } = require("../app");
const stripe = Stripe(process.env.stripeKey);

router.get("/", function (req, res, next) {
  stripe.balance.retrieve(function (err, balance) {
    console.log(balance);
  });
});

module.exports = router;
