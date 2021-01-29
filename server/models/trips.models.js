const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("validator");
const { Flights } = require("./flights.models");
const { Cars } = require("./cars.models");
const { Hotels } = require("./hotels.models");
const { User } = require("./user.models");

const tripsSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
    required: true,
  },
  flight: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Flights,
    required: true,
  },
  hotel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Hotels,
    required: false,
  },
  car: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Cars,
    required: false,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  totalCost: {
    //in cents
    type: Number,
  },
});

const Trips = mongoose.model("Trips", tripsSchema);
module.exports = { Trips };
