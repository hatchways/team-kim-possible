import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { getFlightDetails } from "../utils/skyscanner";

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
  const outgoingDetails = getFlightDetails(
    places,
    quoteDetails,
    carriers,
    "outbound"
  );
  const inboundDetails = getFlightDetails(
    places,
    quoteDetails,
    carriers,
    "inbound"
  );

  return (
    <Grid container className={classes.detailsContainer}>
      <Grid item xs={12} className={classes.detail}>
        <b>Outgoing Flight</b>
      </Grid>
      <Grid item xs={12} className={classes.detail}>
        Carrier: {outgoingDetails.carrierName}
      </Grid>
      <Grid item xs={12} className={classes.detail}>
        {outgoingDetails.originPlace} ={">"} {outgoingDetails.destinationPlace}
      </Grid>
      <Grid item xs={12} className={classes.detail}>
        Flight date: {outgoingDetails.departureDate.slice(0, 10)}
      </Grid>
      <Grid item xs={12} className={classes.detail}>
        <b>Returning Flight</b>
      </Grid>
      <Grid item xs={12} className={classes.detail}>
        Carrier: {inboundDetails.carrierName}
      </Grid>
      <Grid item xs={12} className={classes.detail}>
        {inboundDetails.originPlace} ={">"} {inboundDetails.destinationPlace}
      </Grid>
      <Grid item xs={12} className={classes.detail}>
        Flight date: {inboundDetails.departureDate.slice(0, 10)}
      </Grid>
      <Grid item xs={12} className={classes.price}>
        Starting from: <b>${quoteDetails.MinPrice}</b>
      </Grid>
    </Grid>
  );
}

export default FlightDetails;
