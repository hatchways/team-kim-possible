const express = require("express");
const router = express.Router();
const objectId = require("mongodb").ObjectID;
const { User } = require("../models/user.models");

router.post("/", async function (req, res, next) {
  nullId = "000000000000000000000000";
  try {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      car: objectId(nullId),
      flight: objectId(nullId),
      hotel: objectId(nullId),
    });

    await user.save();
    const token = await user.generateAuthenticationToken(user);
    res
      .cookie("authenticationToken", token, { httpOnly: true, expires: 0 })
      .status(201)
      .send({ responseMessage: "Signup success!" });
  } catch (e) {
    res.status(404).send({ responseMesage: e });
  }
});

module.exports = router;
