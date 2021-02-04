const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const flightsSchema = new Schema({
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
  carrier: {
    type: String,
  },
  price: {
    //In Cents
    type: String,
    required: true,
  },
});

const Flights = mongoose.model("Flights", flightsSchema);
module.exports = { Flights };
