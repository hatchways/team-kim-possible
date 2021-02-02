const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carsSchema = new Schema({
  name: {
    type: String,
    maxlength: 50,
    required: true,
  },
  rate: {
    type: String,
    required: false,
  },
  total: {
    type: String,
    required: false,
  },
  imageUrl: {
    type: String,
    required: false,
  },
  takeOutDate: {
    type: Date,
    required: false,
  },
  returnDate: {
    type: Date,
    required: false,
  },
  kmsDriven: {
    type: Number,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
});

const Cars = mongoose.model("Cars", carsSchema);
module.exports = { Cars };
