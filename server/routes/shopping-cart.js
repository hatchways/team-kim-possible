const express = require("express");
const router = express.Router();
const { User } = require("../models/user.models");

router.post("/update-cart", async function (req, res, next) {
  try {
    await User.findOneAndUpdate(
      { _id: req.user._id },
      { shoppingCart: req.body }
    );
  } catch (e) {
    res.status(404).send({ responseMesage: "Could Not Update Shopping Cart" });
  }

  res.status(200).send({
    responseMessage: "Cart Updated Successfully",
  });
});

router.get("/get-cart", async function (req, res, next) {
  try {
    user = await User.findOne({ _id: req.user._id });
  } catch (err) {
    res.status(404).send({ responseMesage: "Could Not Fetch Shopping Cart" });
  }

  res.status(200).send({
    cart: user.shoppingCart,
  });
});

module.exports = router;
