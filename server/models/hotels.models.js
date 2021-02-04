const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hotelsSchema = new Schema({
  name: {
    type: String,
    maxlength: 50,
    required: true,
  },
  numberOfOccupants: {
    type: Number,
    min: 1,
    max: 4,
  },
  roomNumber: {
    type: String,
  },
  checkInDate: {
    type: Date,
  },
  checkOutDate: {
    type: Date,
  },
  image: {
    type: String,
  },
  rating: {
    type: String,
  },
  location: {
    type: String,
  },
  reviews: {
    type: String,
  },
  price: {
    //Per night in Cents
    type: String,
  },
});

const Hotels = mongoose.model("Hotels", hotelsSchema);
module.exports = { Hotels };
