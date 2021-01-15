const express = require("express");
const router = express.Router();
const { upload } = require("../utils/aws");
const uploadOne = upload.single("profile-picture");

router.post("/profile-picture", function (req, res, next) {
  uploadOne(req, res, (err) => {
    if (err) {
      return res.status(404).send({ responseMessage: err });
    }
    return res.status(201).send({
      responseMessage: "Picture uploaded successfully!",
      pictureUrl: req.file.location,
    });
  });
});

module.exports = router;
