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
  },
  total: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  takeOutDate: {
    type: Date,
  },
  returnDate: {
    type: Date,
  },
  kmsDriven: {
    type: Number,
  },
  image: {
    type: String,
  },
});

const Cars = mongoose.model("Cars", carsSchema);
module.exports = { Cars };
