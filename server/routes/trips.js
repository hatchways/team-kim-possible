const router = express.Router();
const { Trips } = require("../models/trips.models");
const { Flights } = require("../models/flights.models");
const { Cars } = require("../models/cars.models");
const { Hotels } = require("../models/hotels.models");
const { User } = require("../models/user.models");

// Get routes
router.get("/", async (req, res) => {
  //Will return a user's trip data based on email
  Trips.find({ email: req.body.email }, function (err, result) {
    if (err) {
      return res.status(400);
    } else {
      return result;
    }
  });
});
router.post("/", async (req, res) => {
  //Get the current user
  const user = await User.findOne({
    email: req.body.email,
  });
  //Create the trip object that will be used for creating the DB. Creates only the required schema properties
  tripData = {
    user: user._id,
  };
  //Create car, hotel, and/or flight if exists
  if (req.body.car) {
    carData = {
      name: req.body.car.name,
      takeOutDate: req.body.car.takeOutDate,
      returnDate: req.body.car.returnDate,
      image: req.body.car.image,
      price: req.body.car.dailyPrice,
    };
    const car = await new Cars(carData).save();
    tripData["car"] = car._id;
  }
  if (req.body.hotel) {
    hotelData = {
      name: req.body.hotel.name,
      numberOfOccupants: req.body.hotel.numberOfOccupants,
      roomNumber: req.body.hotel.roomNumber,
      checkInDate: req.body.hotel.checkInDate,
      checkOutDate: req.body.hotel.checkOutDate,
      image: req.body.hotel.image,
      price: req.body.hotel.dailyPrice,
    };
    const hotel = await new Hotels(hotelData).save();
    tripData["hotel"] = hotel._id;
  }
  if (req.body.flight) {
    flightData = {
      departureDate: req.body.flight.departureDate,
      returnDate: req.body.flight.returnDate,
      departureLocation: req.body.flight.departureDate,
      destinationLocation: req.body.flight.destinationLocation,
      carrier: req.body.flight.carrier,
      price: req.body.flight.price,
    };
    const flight = await new Flights(flightData).save();
    tripData["flight"] = flight._id;
  }
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
