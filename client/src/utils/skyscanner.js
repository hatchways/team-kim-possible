import axios from "axios";

const cityId = async (city) => {
  const response = await axios({
    method: "get",
    url:
      "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/USD/en-US/",
    params: {
      query: city,
    },
    headers: {
      "x-rapidapi-key": "12ace0bfd9msh34dee4306bb93d3p1da922jsn4c10b1bd8ee4",
      "x-rapidapi-host":
        "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
      useQueryString: true,
    },
  });
  return response.data.Places[0].CityId;
};

const outgoingRoutes = async (
  originCity,
  destinationCity,
  departureDate,
  arrivalDate
) => {
  const response = await axios({
    method: "get",
    url: `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/${originCity}/${destinationCity}/${departureDate}`,
    params: {
      inboundpartialdate: arrivalDate,
    },
    headers: {
      "x-rapidapi-key": "12ace0bfd9msh34dee4306bb93d3p1da922jsn4c10b1bd8ee4",
      "x-rapidapi-host":
        "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
      useQueryString: true,
    },
  });
  return response;
};

export { cityId, outgoingRoutes };
