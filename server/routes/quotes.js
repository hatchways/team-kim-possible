const express = require("express");
const router = express.Router();
const axios = require("axios");

//route quotes/:originPlace/:destinationPlace/:departureDate/returnDate?inboundpartialdate=''

router.get(
  "/:originPlace/:destinationPlace/:departureDate",
  async function (req, res, next) {
    try {
      const originPlace = req.params.originPlace;
      const destinationPlace = req.params.destinationPlace;
      const departureDate = req.params.departureDate;

      const response = await axios.get(
        `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/${originPlace}/${destinationPlace}/${departureDate}`,
        {
          headers: {
            "x-rapidapi-key":
              "12ace0bfd9msh34dee4306bb93d3p1da922jsn4c10b1bd8ee4",
            "x-rapidapi-host":
              "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
            useQueryString: true,
          },
          params: req.query,
        }
      );
      if (response.data.length !== 0) {
        res.json(response.data);
      } else {
        res.status(404);
        throw new Error("Flights not found");
      }
    } catch (error) {
      res.send(error);
    }
  }
);

module.exports = router;
