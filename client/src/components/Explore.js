import React, { useEffect, useState } from "react";
import { Grid, Button } from "@material-ui/core";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import ExploreCard from "./ExploreCard";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import { Typography } from "@material-ui/core";
import axios from "axios";
import { returnArrayRandom } from "../utils/utilFunctions";

const exploreStyles = makeStyles((theme) => ({
  pageContainer: {
    overflow: "hidden",
    marginBottom: "3rem",
  },
  pt4: {
    paddingTop: "3rem",
  },

  textAlign: {
    textAlign: "center",
  },

  cardContainer: {
    paddingTop: "2rem",
    paddingLeft: "10%",
    paddingRight: "10%",
  },

  headerSpacing: {
    margin: "2rem 0 1rem 0",
    textAlign: "center",
  },
  button: theme.buttonPrimary,
}));

function Explore(props) {
  //To get image for exploreCard, make sure the image is saved in public with the name of the place. ex: "public/images/cancun.png"
  //THIS: props.location.toLowerCase() === saved image name
  const theme = useTheme();
  const classes = exploreStyles(theme);
  const [locations, setLocations] = useState([]);
  const { favorites, allLocations } = props;
  //On page load(not shuffle), this component is rendered four times
  //If this becomes an issue, perhaphs create a parent component just for handling allLocations and pass down
  //as prop?
  const shuffleLocations = () => {
    const randomEight = returnArrayRandom(allLocations, 8);
    setLocations(randomEight);
  };

  useEffect(() => {
    const getInitialLocations = async () => {
      const randomLocations = allLocations
        ? returnArrayRandom(
            allLocations,
            8 - (favorites ? favorites.length : 0)
          )
        : [];
      favorites.forEach((e) => (e.liked = true));

      setLocations([...favorites, ...randomLocations]);
    };

    getInitialLocations();
  }, [allLocations, favorites]);
  console.log(locations);
  console.log("render!");
  return (
    <>
      <Grid
        container
        justify="center"
        alignItems="center"
        direction="row"
        className={classes.pageContainer}
      >
        <Grid
          container
          item
          xs={12}
          justify="center"
          alignItems="center"
          className={classes.pt4}
        >
          <Grid item xs={12} container justify="center" alignItems="center">
            <Typography variant="h2" className={classes.textAlign}>
              Explore Destinations
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="h5" className={classes.headerSpacing}>
            World's Top Destinations to Explore
          </Typography>
        </Grid>
        <Grid
          container
          item
          justify="center"
          alignItems="center"
          spacing={5}
          className={classes.cardContainer}
        >
          <Grid container alignItems="center" justify="center">
            <Button
              variant="contained"
              size="large"
              className={classes.button}
              onClick={() => shuffleLocations()}
            >
              Shuffle <ShuffleIcon />
            </Button>
          </Grid>
          {locations.map((loc) => {
            return (
              <Grid item xs={12} lg={3} key={loc.id}>
                <ExploreCard
                  location={loc}
                  imgName={loc.imgName}
                  alreadyLiked={loc.liked ? true : false}
                ></ExploreCard>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
}

export default Explore;
