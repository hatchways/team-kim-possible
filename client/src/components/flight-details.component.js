import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

function FlightDetails(props) {
  const useStyles = makeStyles({
    detailsContainer: {
      textAlign: "center",
      margin: "15px",
      border: "1px solid #000000",
    },
    detail: {
      padding: "15px",
      borderBottom: "1px solid #D3D3D3",
    },
    price: {
      padding: "15px",
      borderTop: "1px solid #000000",
    },
  });
  const classes = useStyles();

  const { quoteDetails, places, carriers } = props;
  //THIS DEFINTELY NEEDS A UTIL FUNCTION OF ITS OWN LATER
  //Gets outgoing route details
  const outgoingOriginPlace = places.find(
    (place) => quoteDetails.OutboundLeg.OriginId === place.PlaceId
  ).Name;
  const outgoingDestinationPlace = places.find(
    (place) => quoteDetails.OutboundLeg.DestinationId === place.PlaceId
  ).Name;
  const outgoingCarrierId = quoteDetails.OutboundLeg.CarrierIds[0];
  const outgoingCarrierName = carriers.find(
    (carrier) => outgoingCarrierId === carrier.CarrierId
  ).Name;
  const outgoingDepartureDate = quoteDetails.OutboundLeg.DepartureDate;

  //Gets inbound route details
  const inboundOriginPlace = places.find(
    (place) => quoteDetails.InboundLeg.OriginId === place.PlaceId
  ).Name;
  const inboundDestinationPlace = places.find(
    (place) => quoteDetails.InboundLeg.DestinationId === place.PlaceId
  ).Name;
  const incomingCarrierId = quoteDetails.InboundLeg.CarrierIds[0];
  const inboundCarrierName = carriers.find(
    (carrier) => incomingCarrierId === carrier.CarrierId
  ).Name;
  const inboundDepartureDate = quoteDetails.InboundLeg.DepartureDate;

  return (
    <Grid container className={classes.detailsContainer}>
      <Grid item xs={12} className={classes.detail}>
        <b>Outgoing Flight</b>
      </Grid>
      <Grid item xs={12} className={classes.detail}>
        Carrier: {outgoingCarrierName}
      </Grid>
      <Grid item xs={12} className={classes.detail}>
        {outgoingOriginPlace} ={">"} {outgoingDestinationPlace}
      </Grid>
      <Grid item xs={12} className={classes.detail}>
        Flight date: {outgoingDepartureDate.slice(0, 10)}
      </Grid>
      <Grid item xs={12} className={classes.detail}>
        <b>Returning Flight</b>
      </Grid>
      <Grid item xs={12} className={classes.detail}>
        Carrier: {inboundCarrierName}
      </Grid>
      <Grid item xs={12} className={classes.detail}>
        {inboundOriginPlace} ={">"} {inboundDestinationPlace}
      </Grid>
      <Grid item xs={12} className={classes.detail}>
        Flight date: {inboundDepartureDate.slice(0, 10)}
      </Grid>
      <Grid item xs={12} className={classes.price}>
        Starting from: <b>${quoteDetails.MinPrice}</b>
      </Grid>
    </Grid>
  );
}

export default FlightDetails;
