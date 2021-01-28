const express = require("express");
const router = express.Router();

router.get("/", async function (req, res, next) {
  const locations = [
    { location: "Cancun", country: "Mexico", imgName: "cancun.jpg", id: "1" },
    { location: "London", country: "UK", imgName: "london.jpg", id: "2" },
    { location: "Bali", country: "Indonesia", imgName: "bali.jpg", id: "3" },
    { location: "Oslo", country: "Norway", imgName: "oslo.jpg", id: "4" },
    { location: "Paris", country: "France", imgName: "paris.jpg", id: "5" },
    { location: "New York", country: "USA", imgName: "newyork.jpg", id: "6" },
    { location: "Miami", country: "USA", imgName: "miami.jpg", id: "7" },
    { location: "Rome", country: "Italy", imgName: "rome.jpg", id: "8" },
    {
      location: "Amsterdam",
      country: "Netherlands",
      imgName: "amsterdam.jpg",
      id: "9",
    },
    {
      location: "Bora Bora",
      country: "French Polynesia",
      imgName: "borabora.jpg",
      id: "10",
    },
    { location: "Cairo", country: "Egypt", imgName: "cairo.jpg", id: "11" },
    {
      location: "Cape Town",
      country: "South Africa",
      imgName: "capetown.jpg",
      id: "12",
    },
    { location: "Cusco", country: "Peru", imgName: "cusco.jpg", id: "13" },
    {
      location: "Florence",
      country: "Italy",
      imgName: "florence.jpg",
      id: "14",
    },
    { location: "Hanoi", country: "Vietnam", imgName: "hanoi.jpg", id: "15" },
    {
      location: "Hong Kong",
      country: "China",
      imgName: "hongkong.jpg",
      id: "16",
    },
    { location: "Jaipur", country: "India", imgName: "jaipur.jpg", id: "17" },
    { location: "Lima", country: "Peru", imgName: "lima.jpg", id: "18" },
    {
      location: "Marrakech",
      country: "Morroco",
      imgName: "marrakech.jpg",
      id: "19",
    },
    {
      location: "Montreal",
      country: "Canada",
      imgName: "montreal.jpg",
      id: "20",
    },
    {
      location: "Seoul",
      country: "South Korea",
      imgName: "seoul.jpg",
      id: "21",
    },
    {
      location: "Siem Reap",
      country: "Cambodia",
      imgName: "siemreap.jpg",
      id: "22",
    },
    {
      location: "Sydney",
      country: "Australia",
      imgName: "sydney.jpg",
      id: "23",
    },
    {
      location: "Tahiti",
      country: "French Polynesia",
      imgName: "tahiti.jpg",
      id: "24",
    },
    { location: "Taipei", country: "Taiwan", imgName: "taipei.jpg", id: "25" },
    {
      location: "Toronto",
      country: "Canada",
      imgName: "toronto.jpg",
      id: "26",
    },
    {
      location: "Zanzibar",
      country: "Tanzania",
      imgName: "zanzibar.jpg",
      id: "27",
    },
    { location: "Sapporo", country: "Japan", imgName: "sapporo.jpg", id: "28" },
  ];

  try {
    res.status(200).send({ locations });
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
