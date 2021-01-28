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
  price: {
    //In Cents
    type: Number,
    required: true,
  },
});

const Cars = mongoose.model("Cars", carsSchema);
module.exports = { Cars };
