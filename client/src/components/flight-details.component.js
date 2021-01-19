import React from "react";

function FlightDetails(props) {
  const { quoteDetails, places, carriers } = props;
  //Prob can consolidate functions into reusable one
  console.log(quoteDetails);
  const originPlace = places.find(
    (place) => quoteDetails.OutboundLeg.OriginId === place.PlaceId
  ).Name;
  const destinationPlace = places.find(
    (place) => quoteDetails.OutboundLeg.DestinationId === place.PlaceId
  ).Name;
  const carrierId = quoteDetails.OutboundLeg.CarrierIds[0];
  const carrierName = carriers.find(
    (carrier) => carrierId === carrier.CarrierId
  ).Name;

  return (
    <div>
      <p>Carrier:{carrierName}</p>
      <p> From:{originPlace}</p>
      <p> To:{destinationPlace}</p>
      <p>Starting From:${quoteDetails.MinPrice}</p>
    </div>
  );
}

export default FlightDetails;
