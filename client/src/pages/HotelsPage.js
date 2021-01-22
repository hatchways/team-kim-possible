import React from "react";
import { Wrapper } from "./styled";
import { Divider, Grid, Input } from "@material-ui/core";
import HotelFilter from "../components/HotelFilter";
import HotelSearch from "../components/Hotels/HotelSearch";
import HotelList from "../components/Hotels/HotelList";

const HotelsPage = () => {
  return (
    <Wrapper>
      <HotelSearch />
      <Grid container justify="center">
        <Grid item xs={12} sm={3}>
          <HotelFilter />
        </Grid>
        <Grid item xs={12} sm={7}>
          <HotelList />
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default HotelsPage;
