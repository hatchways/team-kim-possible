import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { getFlightDetails } from "../utils/skyscanner";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";

function FlightDetails(props) {
  const useStyles = makeStyles({
    detailsContainer: {
      textAlign: "center",
      marginTop: "35px",
      border: "1px solid #D3D3D3",
      borderRadius: "5px",
    },
    detail: {
      padding: "15px",
      borderBottom: "1px solid #D3D3D3",
    },
    flightIcon: {
      fontSize: "40px",
      paddingRight: "15px",
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
      <Grid container className={classes.detail} justify="space-between">
        <Grid container xs={12} sm={5} justify="center" alignItems="flex-end">
          <Grid item>
            <FlightTakeoffIcon className={classes.flightIcon} />
          </Grid>
          <Grid item>
            <Typography variant="h6" color="textSecondary">
              {outgoingDetails.carrierName}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Typography variant="h5">${quoteDetails.MinPrice}</Typography>
          <Typography variant="h6" color="textSecondary">
            round trip
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        xs={12}
        className={classes.detail}
        justify="space-between"
      >
        <Grid container xs={12} sm={5} justify="center" alignItems="center">
          <Grid item>
            <Typography variant="h6">
              <b>Departure</b>
            </Typography>
          </Grid>

          <Grid item>
            Flight date: {outgoingDetails.departureDate.slice(0, 10)}
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className={classes.detail}>
        {outgoingDetails.originPlace} ={">"} {outgoingDetails.destinationPlace}
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
    </Grid>
  );
}

export default FlightDetails;
