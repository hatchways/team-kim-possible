const router = express.Router();
const { Trips } = require("../models/trips.models");
const { Flights } = require("../models/flights.models");
const { Cars } = require("../models/cars.models");
const { Hotels } = require("../models/hotels.models");
const { User } = require("../models/user.models");

// Get routes.
router.get("/", async (req, res) => {
  //Will return a users trip data based on email
  Trips.find({ email: req.body.email }, function (err, result) {
    if (err) {
      return res.status(400);
    } else {
      return result;
    }
  });
});
router.post("/", async (req, res) => {
  //Create the trip object that will be used for creating the DB. Creates only the required schema properties
  tripData = {
    user: user._id,
  };
  //Create car, hotel, and/or flight if exists
  if (req.body.car) {
    carData = {
      name: req.body.name,
      takeOutDate: "2002-12-09",
      returnDate: "2002-12-09",
      image: req.body.image,
      price: req.body.dailyPrice,
    };
    const car = await new Cars(carData).save();
    tripData["car"] = car._id;
  }
  if (req.body.hotel) {
    hotelData = {
      name: req.body.name,
      numberOfOccupants: req.body.numberOfOccupants,
      roomNumber: req.body.roomNumber,
      checkInDate: req.body.checkInDate,
      checkOutDate: req.body.checkOutDate,
      image: req.body.image,
      price: req.body.dailyPrice,
    };
    const hotel = await new Hotels(hotelData).save();
    tripData["hotel"] = hotel._id;
  }
  if (req.body.flight) {
    flightData = {
      departureDate: req.body.departureDate,
      returnDate: req.body.returnDate,
      departureLocation: req.body.departureDate,
      destinationLocation: req.body.destinationLocation,
      carrier: req.body.carrier,
      price: req.body.price,
    };
    const flight = await new Flights(flightData).save();
    tripData["flight"] = flight._id;
  }
  //Get the current user
  const user = await User.findOne({
    email: req.body.email,
  });
  //Creates the trip with user + what else exists(car, hotel, flight)
  const trip = new Trips(tripData);
  try {
    await trip.save();
    return res.status(200).json({
      success: true,
    });
  } catch (err) {
    return res.status(400);
  }
});

module.exports = router;
