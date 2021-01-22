const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

router.get("/", function (req, res, next) {
	const {
		originLocation,
		destinationLocation,
		departureDate,
		arrivalDate,
	} = req.query;
	//Arrival in this case means arrival to the destination NOT the origin
	//Same way, departure date is departure from the destinaion ie return flight date
	const options = {
		method: "GET",
		url: `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/${originLocation}/${destinationLocation}/${arrivalDate}/${departureDate}`,
		headers: {
			"x-rapidapi-key": process.env.RAPIDAPI_KEY,
			"x-rapidapi-host":
				"skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
		},
	};

	axios
		.request(options)
		.then(function (response) {
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
			"x-rapidapi-key": process.env.RAPIDAPI_KEY,
			"x-rapidapi-host":
				"skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
		},
	};

	axios
		.request(options)
		.then(function (response) {
			res.send(response.data);
		})
		.catch(function (error) {
			res.send(error);
		});
});

module.exports = router;
