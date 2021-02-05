const mongoose = require("mongoose");

const locationSchema = mongoose.Schema({
  location: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  imgName: {
    type: String,
    required: true,
  },
});

const Location = mongoose.model("Location", locationSchema);
module.exports = { Location };
