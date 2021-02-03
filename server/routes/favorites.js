const express = require("express");
const router = express.Router();
const { User } = require("../models/user.models");

//PUT /favorites
router.put("/", async function (req, res, next) {
  const { location, add } = req.body;
  const user = await User.findById(req.user._id);
  if (add) {
    user.favorites = [...user.favorites, location];
  } else {
    user.favorites = user.favorites.filter((fav) => fav.id !== location.id);
  }
  const updatedUser = await user.save();
  res.status(200).send(updatedUser);
});

router.get("/getAllFavorites", async function (req, res, next) {
  const user = await User.findById(req.user._id);
  res.status(200).send(user.favorites);
});

module.exports = router;
