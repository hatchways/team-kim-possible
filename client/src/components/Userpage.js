import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, Typography } from "@material-ui/core";
import Avatar from "./BigAvatar";
import ExploreCard from "./ExploreCard";
import "fontsource-roboto";

const useStyles = makeStyles((themes) => ({
  root: {
    maxWidth: "100%",
    overflowX: "auto",
  },
  grid: {
    width: "100%",
    margin: "0px",
    maxWidth: "100%",
    overflowX: "hidden",
  },
  leftQuadrant: {
    width: "30%",
    margin: "0px",
  },
  rightQuadrant: {
    width: "90%",
    margin: "0px",
    marginLeft: "30%",
    backgroundImage:
      "linear-gradient(to right, rgba(240,240,248,1), rgba(240,240,248,0));",
    position: "absolute",
    marginRight: "-30%",
  },
  paper: {
    textAlign: "center",
    backgroundColor: "transparent",
  },
  avatar: {
    marginLeft: "41%",
  },
  container: {
    display: "grid",
    marginTop: "9%",
  },
  exploreContainer: {
    marginLeft: "13%",
    marginRight: "-13%",
  },
  invisible: {
    marginLeft: "10%",
    marginRight: "-10%",
    opacity: "0",
  },
  alignment: {
    alignContent: "center",
    textAlign: "center",
    margin: "auto",
  },
  logout: {
    position: "absolute",
    botton: "10px",
    alignContent: "center",
    textAlign: "center",
    margin: "auto",
  },
  selected: {
    textAlign: "center",
    color: "#F09600",
    marginLeft: "-38%",
  },
  misc: {
    marginRight: "20px",
    color: "#9A9DBA",
    position: "fixed",
    bottom: "10px",
    left: "13%",
  },
  h3: {
    marginLeft: "21%",
    marginTop: "4%",
  },
  exploreButton: {
    color: "black",
    marginTop: "8%",
  },
  FavouriteSpace: {
    marginTop: "10%",
  },
  buttongray: {
    color: "#808080",
  },
  email: {
    color: "#9EA1BC",
  },
}));

let invisibleCount = 0;
export default function UserPage() {
  const classes = useStyles();
  const [exploreCards, setExploreCards] = React.useState([
    {
      location: "Oslo",
      country: "Norway",
      img:
        "https://www.worldatlas.com/r/w960-q80/upload/a1/28/76/shutterstock-133005938.jpg",
      liked: false,
    },
    {
      location: "Chichibu",
      country: "Japan",
      img:
        "https://www.worldatlas.com/r/w960-q80/upload/a1/28/76/shutterstock-133005938.jpg",
      liked: true,
    },
    {
      location: "Copenhagen",
      country: "Denmark",
      img:
        "https://www.worldatlas.com/r/w960-q80/upload/a1/28/76/shutterstock-133005938.jpg",
      liked: true,
    },
    {
      location: "Vancouver",
      country: "Canada",
      img:
        "https://www.worldatlas.com/r/w960-q80/upload/a1/28/76/shutterstock-133005938.jpg",
      liked: true,
    },
    {
      location: "Stockholm",
      country: "Sweden",
      img:
        "https://www.worldatlas.com/r/w960-q80/upload/a1/28/76/shutterstock-133005938.jpg",
      liked: false,
    },
  ]);

  const listOfExploreCards = exploreCards.map((exploreCard) => {
    if (exploreCard["liked"] === true) {
      if (invisibleCount < 2) {
        invisibleCount++;
        return (
          <Grid item xs={3} className={classes.exploreContainer}>
            <ExploreCard
              location={exploreCard.location}
              country={exploreCard.country}
              img={exploreCard.img}
              onLike={() => {
                exploreCard["liked"] = false;
              }}
            ></ExploreCard>
          </Grid>
        );
      }

      if (invisibleCount > 1) {
        invisibleCount = 1;
        return (
          <React.Fragment>
            <Grid item xs={3} className={classes.invisible}>
              <ExploreCard location="Cancun" country="Mexico"></ExploreCard>
            </Grid>
            <Grid item xs={3} className={classes.invisible}>
              <ExploreCard location="Cancun" country="Mexico"></ExploreCard>
            </Grid>
            <Grid item xs={3} className={classes.exploreContainer}>
              <ExploreCard
                location={exploreCard.location}
                country={exploreCard.country}
                img={exploreCard.img}
                onLike={() => {
                  exploreCard["liked"] = false;
                }}
              ></ExploreCard>
            </Grid>
          </React.Fragment>
        );
      }
    }
  });

  return (
    <Grid container spacing={0} className={classes.grid}>
      <Grid container spacing={1} className={classes.leftQuadrant}>
        <Grid item xs={12} className={classes.container}>
          <paper className={classes.alignment}>
            <Avatar />
          </paper>
        </Grid>
        <Grid item xs={12} className={classes.alignment}>
          <Typography variant="h5" gutterBottom>
            John Smith
          </Typography>
          <Typography className={classes.email} gutterBottom>
            johnsmith1@gmail.com
          </Typography>
        </Grid>
        <Grid item xs={12} />

        <Button
          variant="outlined"
          color="secondary"
          className={classes.alignment}
        >
          Edit
        </Button>

        <Grid item xs={12} className={classes.FavouriteSpace}>
          <Button fullWidth>Favourite Destinations</Button>
          <Button fullWidth className={classes.buttongray}>
            Notifications
          </Button>
          <Button fullWidth className={classes.buttongray}>
            Account Settings
          </Button>
        </Grid>
        <Grid item xs={12} className={classes.misc}>
          <Button fullWidth>Logout</Button>
        </Grid>
      </Grid>
      <Grid container spacing={4} className={classes.rightQuadrant}>
        <Grid item xs={8}>
          <Typography className={classes.h3} variant="h4" gutterBottom>
            Favourite Destinations
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="outlined"
            size="large"
            className={classes.exploreButton}
          >
            Explore
          </Button>
        </Grid>

        {listOfExploreCards}
      </Grid>
    </Grid>
  );
}
