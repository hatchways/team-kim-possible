const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carsSchema = new Schema({
  name: {
    type: String,
    maxlength: 50,
    required: true,
  },
  takeOutDate: {
    type: Date,
    required: true,
  },
  returnDate: {
    type: Date,
    required: true,
  },
  kmsDriven: {
    type: Number,
  },
  image: {
    type: String,
  },
  price: {
    //per day in cents
    type: Number,
    required: true,
  },
});

const Cars = mongoose.model("Cars", carsSchema);
module.exports = { Cars };
