const express = require("express");
const router = express.Router();
const { User } = require("../models/user.models");

//PUT /favorites
router.put("/", async function (req, res, next) {
  console.log(req.body);
  const { location, add } = req.body;
  const user = await User.findById(req.user._id);
  console.log(user);
  if (add) {
    user.favorites = [...user.favorites, location];
  } else {
    console.log("filtering");
    user.favorites = user.favorites.filter((fav) => fav.id !== location.id);
  }
  const updatedUser = await user.save();
  console.log(updatedUser);
  res.status(200).send(updatedUser);
});

router.get("/getAllFavorites", async function (req, res, next) {
  const user = await User.findById(req.user._id);
  res.status(200).send(user.favorites);
});

module.exports = router;
