const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FlightSchema = new Schema({
  departureDate: {
    type: Date,
    required: true,
  },
  returnDate: {
    type: Date,
  },
  departureLocation: {
    type: String,
    required: true,
  },
  destinationLocation: {
    type: String,
    required: true,
  },
  price: {
    //In Cents
    type: Number,
    required: true,
  },
});

const hotelSchema = new Schema({
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

const TripsSchema = new Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    validate: {
      validator: function (value) {
        return validator.isEmail(value);
      },
      message: (props) => `${props.value} is not a valid email!`,
    },
  },
  flight: {
    type: [FlightSchema],
    required: true,
  },
  hotel: {
    type: [hotelSchema],
    required: false,
  },
});

const Trips = mongoose.model("Trips", TripsSchema);
module.exports = { Trips };
