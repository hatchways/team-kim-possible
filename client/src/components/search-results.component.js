import React from "react";
import FlightDetails from "../components/flight-details.component";

function SearchResults(props) {
  const { state, setState } = props;
  const {
    Carriers: carriers,
    Places: places,
    Quotes: quotes,
  } = state.routeData;
  if (quotes.length < 1) {
    return <div>Sorry, there are no matching flights!</div>;
  }
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
