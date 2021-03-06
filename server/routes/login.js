const express = require("express");
const router = express.Router();
const { User } = require("../models/user.models");
const bcrypt = require("bcrypt");

router.post("/", async function (req, res, next) {
  try {
    console.log(req.body.email);
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).send({
        responseMesage: "Credentials invalid!",
      });
    }
    // Might move user verification later to user model
    const passwordMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (passwordMatch) {
      const token = await user.generateAuthenticationToken(user);
      //authenticationToken is session cookie and will be removed once browser is closed
      return res
        .cookie("authenticationToken", token, { httpOnly: true, expires: 0 })
        .status(201)
        .send({
          responseMessage: "Login success!",
          user: {
            name: user.name,
            email: user.email,
            home: user.home,
            favorites: user.favorites,
          },
        });
    }
    return res.status(404).send("Invalid password");
  } catch (err) {
    res.status(404).send({
      responseMesage: "Credentials invalid!",
    });
  }
});

module.exports = router;
