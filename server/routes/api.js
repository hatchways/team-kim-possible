const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

router.get("/", function (req, res, next) {
  const apiParams = {
    originPlace: "YYZ-sky", //Have to use skyscanner code from /api/places
    destinationPlace: "YVR-sky", //Have to use skyscanner code from /api/places
    departureDate: "2021-01-15", //Can set to 'anytime' if you want
    returnDate: "2021-02-15", //Can set to 'anytime' if you want
  };
  const options = {
    method: "GET",
    url: `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/CA/CAD/en-US/${apiParams.originPlace}/${apiParams.destinationPlace}/${apiParams.departureDate}`,
    params: { inboundpartialdate: apiParams.returnDate },
    headers: {
      "x-rapidapi-key": process.env.rapidapi,
      "x-rapidapi-host":
        "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      res.send(response.data);
    })
    .catch(function (error) {
      res.send(error);
    });
});

router.get("/places", function (req, res, next) {
  const options = {
    method: "GET",
    url:
      "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/USD/en-USD/",
    params: { query: "Vancouver" },
    headers: {
      "x-rapidapi-key": process.env.rapidapi,
      "x-rapidapi-host":
        "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      res.send(response.data);
    })
    .catch(function (error) {
      res.send(error);
    });
});

module.exports = router;
