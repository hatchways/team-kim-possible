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
    required: true,
  },
  roomNumber: {
    type: String,
    required: true,
  },
  checkInDate: {
    type: Date,
    required: true,
  },
  checkOutDate: {
    type: Date,
    required: true,
  },
  price: {
    //In Cents
    type: Number,
    required: true,
  },
});

const Hotels = mongoose.model("Hotels", hotelsSchema);
module.exports = { Hotels };
