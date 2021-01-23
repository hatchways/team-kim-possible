const express = require("express");
const router = express.Router();

const hotelList = [
  {
    name: "W Bali-Semiynak",
    image: "/images/hotel1.jpg",
    rating: 5,
    location: "W Bali-Seminyak",
    reviews: {
      score: 8.1,
      review: "Excellent",
      numberOfReviews: 597,
    },
    price: 175,
  },
  {
    name: "Alila Ubud",
    image: "/images/hotel2.jpg",
    rating: 5,
    location: "Alila Ubud",
    reviews: {
      score: 9.6,
      review: "Wonderful",
      numberOfReviews: 936,
    },
    price: 121,
  },
  {
    name: "The Kanyon Jungle Resort by Pramana",
    image: "/images/hotel3.jpg",
    rating: 5,
    location: "Janyon Jungle-Seminyak",
    reviews: {
      score: 9.6,
      review: "Excellent",
      numberOfReviews: 597,
    },
    price: 180,
  },
];

router.get("/", async function (req, res, next) {
  try {
    res.status(200).json({ hotelList });
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
