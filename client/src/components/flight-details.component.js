import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { getFlightDetails } from "../utils/skyscanner";
import FlightDetailsByDirection from "../components/flight-details-by-direction.component";

function FlightDetails(props) {
  const useStyles = makeStyles({
    detailsContainer: {
      textAlign: "center",
      marginTop: "35px",
      border: "1px solid #D3D3D3",
      borderRadius: "5px",
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
      <FlightDetailsByDirection
        details={outgoingDetails}
        quoteDetails={quoteDetails}
        extraInfo={true}
      />

      <FlightDetailsByDirection
        details={inboundDetails}
        quoteDetails={quoteDetails}
      />
    </Grid>
  );
}

export default FlightDetails;
