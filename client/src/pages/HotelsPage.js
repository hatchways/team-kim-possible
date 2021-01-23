import React from "react";
import { Grid } from "@material-ui/core";
import HotelFilter from "../components/HotelFilter";
import HotelSearch from "../components/Hotels/HotelSearch";
import HotelList from "../components/Hotels/HotelList";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  grid7: {
    backgroundColor: "rgba(240, 240, 248, 1)",
    padding: "20px",
  },
});
const HotelsPage = () => {
  const classes = useStyles();
  return (
    <div className="root">
      <HotelSearch />
      <Grid container justify="center">
        <Grid item xs={12} sm={3}>
          <HotelFilter />
        </Grid>
        <Grid item xs={12} sm={7} className={classes.grid7}>
          <HotelList />
        </Grid>
      </Grid>
    </div>
  );
};

export default HotelsPage;
