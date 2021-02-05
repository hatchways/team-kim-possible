const express = require("express");
const router = express.Router();
const { User } = require("../models/user.models");
const { Location } = require("../models/location.models");

//PUT /favorites
router.put("/", async function (req, res, next) {
  const { location, add } = req.body;
  if (add) {
    const user = await User.findOneAndUpdate(
      { _id: req.user._id },
      { $push: { favorites: location } }
    );
  } else {
    //Following is just temporary fix for a bug for the sake of the demo
    const user = await User.findById(req.user._id);
    const updatedFavorites = user.favorites.filter(
      (fav) => fav.location !== location.location
    );
    const updatedUser = await User.findOneAndUpdate(
      { _id: req.user._id },
      { favorites: updatedFavorites }
    );
  }

  res.status(200).send();
});

router.get("/getAllFavorites", async function (req, res, next) {
  const user = await User.findById(req.user._id);
  res.status(200).send(user.favorites);
});

router.post("/", async function (req, res, next) {
  const { favorites } = req.body;
  try {
    async function getFavorites(arr) {
      let promises = arr.map(async (i) => {
        return await Location.findOne({ location: i });
      });
      return await Promise.all(promises);
    }
    let result = await getFavorites(favorites);
    const user = await User.findOneAndUpdate(
      { _id: req.user._id },
      { favorites: result }
    );

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
