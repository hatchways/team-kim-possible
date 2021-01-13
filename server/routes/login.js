const express = require("express");
const router = express.Router();
const { User } = require("../models/user.models");
const bcrypt = require("bcrypt");

router.post("/", async function (req, res, next) {
  const user = await User.findOne({
    email: req.body.email,
  });

  if (!user) {
    return res.status(404).send({
      responseMesage: "Credentials invalid!",
    });
  }

  const passwordMatch = await bcrypt.compare(req.body.password, user.password);

  if (passwordMatch) {
    return res.status(201).send({ responseMessage: "Login success!" });
  }

  res.status(404).send({
    responseMesage: "Credentials invalid!",
  });
});

module.exports = router;
