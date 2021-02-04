const express = require("express");
const router = express.Router();
const { User } = require("../models/user.models");
const objectId = require("mongodb").ObjectID;
const { Hotels } = require("../models/hotels.models");
const { Cars } = require("../models/cars.models");
const { Flights } = require("../models/flights.models");

router.post("/update-cart", async function (req, res, next) {
  // const nullId = "000000000000000000000000";
  // for (index in req.body) {
  //   if (req.body[index].type === "car") {
  //     const car = await Cars.findOne({
  //       name: req.body[index].name,
  //     });
  //   }

  //   if (req.body[index].type === "hotel") {
  //     const hotel = await Hotels.findOne({
  //       name: req.body[index].name,
  //     });

  //     await User.findOneAndUpdate(
  //       { _id: objectId("601b581c8fff800580ec3554") },
  //       {
  //         shoppingCart: {
  //           hotel: hotel._id,
  //         },
  //       }
  //     );
  //   }

  //   if (req.body[index].type === "flight") {
  //     const flightData = {
  //       departureDate: "2021-01-01",
  //       returnDate: "2021-01-02",
  //       departureLocation: req.body[index].originPlace,
  //       destinationLocation: req.body[index].destinationPlace,
  //       price: req.body[index].price,
  //     };

  //     const flight = new Flights(flightData);
  //     await flight.save();

  //     await User.findOneAndUpdate(
  //       { _id: objectId("601b581c8fff800580ec3554") },
  //       {
  //         shoppingCart: {
  //           flight: flight._id,
  //         },
  //       }
  //     );
  //   }
  // }
  // const carBool = false;
  // const hotelBool = false;
  // const flightBool = false;

  // for (index in req.body) {
  //   if (req.body[index].type === "car") {
  //     carBool = true;
  //   }
  //   if (req.body[index].type === "hotel") {
  //     hotelBool = true;
  //   }
  //   if (req.body[index].type === "flight") {
  //     flightBool = true;
  //   }
  // }

  const car = await Cars.findOne({
    name: "Honda",
  });

  const hotel = await Hotels.findOne({
    name: "W Bali-Semiynak",
  });

  const flightData = {
    departureDate: "2021-01-01",
    returnDate: "2021-01-02",
    departureLocation: "yes",
    destinationLocation: "req.body[index].destinationPlace",
    price: "req.body[index].price",
  };

  const flight = new Flights(flightData);
  await flight.save();

  try {
    await User.findOneAndUpdate(
      { _id: objectId("601b581c8fff800580ec3554") },
      {
        shoppingCart: {
          car: car._id,
          hotel: hotel._id,
          flight: flight._id,
        },
      }
    );
  } catch (e) {
    res.status(404).send({ responseMesage: "Could Not Update Shopping Cart" });
  }

  res.status(200).send({
    responseMessage: "Cart Updated Successfully",
  });
});

router.get("/get-cart", async function (req, res, next) {
  try {
    user = await User.findOne({ _id: req.user._id });
  } catch (err) {
    res.status(404).send({ responseMesage: "Could Not Fetch Shopping Cart" });
  }

  res.status(200).send({
    cart: user.shoppingCart,
  });
});

module.exports = router;
