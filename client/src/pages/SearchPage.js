import React, { useState } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import Search from "../components/Search";
import SearchResults from "../components/search-results.component";
import { makeStyles } from "@material-ui/core/styles";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    height: "calc(100vh - 100px)",
    position: "relative",
  },
  main: {
    height: "calc(100vh - 100px - 130px)",
  },
  footer: {
    height: "130px",
    backgroundColor: "#EBF0F7",
  },
  item5: {
    margin: "auto auto",
    textAlign: "center",
    padding: "0 40px",
  },
  header: {
    fontWeight: "550",
    fontSize: "2rem",
  },
  item7: {
    backgroundImage: 'url("/images/searchHero.png")',
  },
  searchContainer: {
    position: "absolute",
    bottom: "90px",
    width: "100%",
  },
});

const SearchPage = () => {
  const classes = useStyles();

  //Gets destination query param if redirected from explore page
  const params = new URLSearchParams(window.location.search);
  const destination = params.get("destination");

  const [state, setState] = useState({
    departureCity: "",
    arrivalCity: destination,
    departureDate: new Date(),
    arrivalDate: new Date(),
    numOfTravellers: 1,
    routeData: null,
  });

  return (
    <div className={classes.root}>
      <Grid>
        <Grid container className={classes.main}>
          <Grid item xs={12} sm={5} className={classes.item5}>
            <Typography variant="h4" className={classes.header}>
              Find the flight and start the holiday
            </Typography>
          </Grid>
          <Grid item xs={12} sm={7} className={classes.item7}></Grid>
        </Grid>
        <Grid item xs={12} className={classes.footer}></Grid>
      </Grid>
      <Container className={classes.searchContainer}>
        <Search state={state} setState={setState} />
      </Container>
      {state.routeData ? (
        <Container>
          <SearchResults state={state} setState={setState} />
        </Container>
      ) : null}
    </div>
  );
};

export default SearchPage;
