const router = express.Router();
const { Trips } = require("../models/trips.models");
const { Flights } = require("../models/flights.models");
const { Cars } = require("../models/cars.models");
const { Hotels } = require("../models/hotels.models");

// Get routes.
// Before user checks out, we can display what they have so far in cart
router.get("/car", async (req, res) => {});

//Post requests
router.post("/car", async (req, res) => {
  carData = {
    name: req.body.name,
    takeOutDate: "2002-12-09",
    returnDate: "2002-12-09",
    image: req.body.image,
    price: req.body.dailyPrice,
  };
  const car = new Cars(carData);
  try {
    await car.save();
    return res.status(200).json({
      success: true,
    });
  } catch (err) {
    return res.status(400);
  }
});

router.post("/hotel", async (req, res) => {
  hotelData = {
    name: req.body.name,
    numberOfOccupants: req.body.numberOfOccupants,
    roomNumber: req.body.roomNumber,
    checkInDate: req.body.checkInDate,
    checkOutDate: req.body.checkOutDate,
    image: req.body.image,
    price: req.body.dailyPrice,
  };
  const hotel = new Hotels(hotelData);
  try {
    await hotel.save();
    return res.status(200).json({
      success: true,
    });
  } catch (err) {
    return res.status(400);
  }
});

router.post("/flight", async (req, res) => {
  flightData = {
    departureDate: req.body.departureDate,
    returnDate: req.body.returnDate,
    departureLocation: req.body.departureDate,
    destinationLocation: req.body.destinationLocation,
    carrier: req.body.carrier,
    price: req.body.price,
  };
  const flight = new Flights(flightData);
  try {
    await flight.save();
    return res.status(200).json({
      success: true,
    });
  } catch (err) {
    return res.status(400);
  }
});

router.post("/trip", async (req, res) => {
  tripData = {};
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
