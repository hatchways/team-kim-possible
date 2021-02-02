const express = require("express");
const router = express.Router();
const { User } = require("../models/user.models");

router.post("/", async function (req, res, next) {
  try {
    const { name, email, password, home } = req.body;
    const user = new User({ name, email, password, home });

    await user.save();
    const token = await user.generateAuthenticationToken(user);
    res
      .cookie("authenticationToken", token, { httpOnly: true, expires: 0 })
      .status(201)
      .json({
        responseMessage: "Signup success!",
        user: {
          name: user.name,
          email: user.email,
          home: user.home,
        },
      });
  } catch (e) {
    res.status(404).send({ responseMesage: e });
  }
});

module.exports = router;
