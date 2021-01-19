import React from "react";
import FlightDetails from "../components/flight-details.component";

function SearchResults(props) {
  const { state, setState } = props;
  const {
    Carriers: carriers,
    Places: places,
    Quotes: quotes,
  } = state.routeData;
  return (
    <div>
      {quotes.map((quote) => (
        <FlightDetails
          quoteDetails={quote}
          places={places}
          carriers={carriers}
        />
      ))}
    </div>
  );
}

export default SearchResults;
