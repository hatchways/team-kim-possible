const express = require("express");
const router = express.Router();
const { User } = require("../models/user.models");
const { Location } = require("../models/location.models");

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

router.post("/", async function (req, res, next) {
  const { favorites } = req.body;
  try {
    const user = await User.findById(req.user._id);
    async function getFavorites(arr) {
      let promises = arr.map(async (i) => {
        return await Location.findOne({ location: i });
      });
      return await Promise.all(promises);
    }
    let result = await getFavorites(favorites);

    user.favorites = result;

    await user.save();
    res.status(200).json({
      user: {
        name: user.name,
        email: user.email,
        home: user.home,
        favorites: result,
      },
    });
  } catch (err) {
    res.send(err);
  }
});
module.exports = router;
