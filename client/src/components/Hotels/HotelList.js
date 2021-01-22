import React from "react";
import { Divider, Grid, Input } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { makeStyles } from "@material-ui/core/styles";
import { hotels } from "./hotels";
import { Wrapper } from "./styled";

const hotel = {
  name: "W Bali-Semiynak",
  image: "string",
  stars: 5,
  location: "W Bali-Seminyak",
  reviews: {
    score: 8.1,
    review: "Excellent",
    numberOfReviews: 597,
  },
  price: 175,
};

const HotelList = () => {
  return (
    <Wrapper>
      <Grid container>
        <Grid item xs={12} sm={4}>
          picture
        </Grid>
        <Grid item xs={12} sm={8}>
          content
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default HotelList;
