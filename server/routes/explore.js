const express = require("express");
const router = express.Router();

router.get("/", async function (req, res, next) {
  const locations = [
    { location: "Cancun", country: "Mexico", imgName: "cancun.jpg" },
    { location: "London", country: "UK", imgName: "london.jpg" },
    { location: "Bali", country: "Indonesia", imgName: "bali.jpg" },
    { location: "Oslo", country: "Norway", imgName: "oslo.jpg" },
    { location: "Paris", country: "France", imgName: "paris.jpg" },
    { location: "New York", country: "USA", imgName: "newyork.jpg" },
    { location: "Miami", country: "USA", imgName: "miami.jpg" },
    { location: "Rome", country: "Italy", imgName: "rome.jpg" },
    { location: "Amsterdam", country: "Netherlands", imgName: "amsterdam.jpg" },
    {
      location: "Bora Bora",
      country: "French Polynesia",
      imgName: "borabora.jpg",
    },
    { location: "Cairo", country: "Egypt", imgName: "cairo.jpg" },
    { location: "Cape Town", country: "South Africa", imgName: "capetown.jpg" },
    { location: "Cusco", country: "Peru", imgName: "cusco.jpg" },
    { location: "Florence", country: "Italy", imgName: "florence.jpg" },
    { location: "Hanoi", country: "Vietnam", imgName: "hanoi.jpg" },
    { location: "Hong Kong", country: "China", imgName: "hongkong.jpg" },
    { location: "Jaipur", country: "India", imgName: "jaipur.jpg" },
    { location: "Lima", country: "Peru", imgName: "lima.jpg" },
    { location: "Marrakech", country: "Morroco", imgName: "marrakech.jpg" },
    { location: "Montreal", country: "Canada", imgName: "montreal.jpg" },
    { location: "Seoul", country: "South Korea", imgName: "seoul.jpg" },
    { location: "Siem Reap", country: "Cambodia", imgName: "siemreap.jpg" },
    { location: "Sydney", country: "Australia", imgName: "sydney.jpg" },
    { location: "Tahiti", country: "French Polynesia", imgName: "tahiti.jpg" },
    { location: "Taipei", country: "Taiwan", imgName: "taipei.jpg" },
    { location: "Toronto", country: "Canada", imgName: "toronto.jpg" },
    { location: "Zanzibar", country: "Tanzania", imgName: "zanzibar.jpg" },
    { location: "Sapporo", country: "Japan", imgName: "sapporo.jpg" },
  ];

  try {
    res.status(200).send({ locations });
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
