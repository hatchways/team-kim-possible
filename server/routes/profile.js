const express = require("express");
const router = express.Router();
const { upload } = require("../utils/aws");
const { User } = require("../models/user.models");
const uploadOne = upload.single("profile-picture");

router.post("/profile-picture", function (req, res, next) {
  uploadOne(req, res, async (err) => {
    if (err) {
      return res.status(404).send({ responseMessage: err });
    }
    //Updates with profile picture url
    await User.findOneAndUpdate(
      { _id: req.user._id },
      { profilePictureUrl: req.file.location }
    );
    return res.status(201).send({
      responseMessage: "Picture uploaded successfully!",
      pictureUrl: req.file.location,
    });
  });
});

module.exports = router;
