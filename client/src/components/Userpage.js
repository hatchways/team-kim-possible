import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core";
import Avatar from "./BigAvatar";
import ExploreCard from "./ExploreCard";
import "./userpage.css";

const useStyles = makeStyles((themes) => ({
  grid: {
    width: "100%",
    margin: "0px",
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
    fontSize: "30px",
    marginLeft: "20%",
  },
  exploreButton: {
    color: "black",
    marginTop: "6%",
  },
  FavouriteSpace: {
    marginTop: "10%",
  },
  root: {
    color: "#808080",
  },
}));

export default function UserPage() {
  const classes = useStyles();

  return (
    <Grid container spacing={0} className={classes.grid}>
      <Grid container spacing={1} className={classes.leftQuadrant}>
        <Grid item xs={12} className={classes.container}>
          <paper className={classes.alignment}>
            <Avatar />
          </paper>
        </Grid>
        <Grid item xs={12}>
          <h3 className={classes.alignment}>John Doe</h3>
          <p className={classes.alignment} style={{ color: "#9EA1BC" }}>
            johndoe1@gmail.com
          </p>
        </Grid>
        <Grid item xs={12} />

        <Button
          variant="outlined"
          style={{ color: "#BEC1E2" }}
          className={classes.alignment}
        >
          Edit
        </Button>

        <Grid item xs={12} className={classes.FavouriteSpace}>
          <Button fullWidth>Favourite Destinations</Button>
          <br></br>
          <Button fullWidth className={classes.root}>
            Notifications
          </Button>
          <br></br>
          <Button fullWidth className={classes.root}>
            Account Settings
          </Button>
          <br></br>
        </Grid>
        <Grid item xs={12} className={classes.misc}>
          <Button fullWidth>Logout</Button>
        </Grid>
      </Grid>
      <Grid container spacing={4} className={classes.rightQuadrant}>
        <Grid item xs={8}>
          <h3 className={classes.h3}>Favourite Destinations</h3>
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

        <Grid item xs={3} className={classes.exploreContainer}>
          <ExploreCard location="Cancun" country="Mexico"></ExploreCard>
        </Grid>
        <Grid item xs={3} className={classes.exploreContainer}>
          <ExploreCard location="Oslo" country="Norway"></ExploreCard>
        </Grid>
        <Grid item xs={3} className={classes.invisible}>
          <ExploreCard location="Cancun" country="Mexico"></ExploreCard>
        </Grid>
        <Grid item xs={3} className={classes.invisible}>
          <ExploreCard location="Cancun" country="Mexico"></ExploreCard>
        </Grid>
        <Grid item xs={3} className={classes.exploreContainer}>
          <ExploreCard location="Cancun" country="Mexico"></ExploreCard>
        </Grid>
        <Grid item xs={3} className={classes.exploreContainer}>
          <ExploreCard location="Cancun" country="Mexico"></ExploreCard>
        </Grid>
        <Grid item xs={3} className={classes.invisible}>
          <ExploreCard location="Cancun" country="Mexico"></ExploreCard>
        </Grid>
        <Grid item xs={3} className={classes.invisible}>
          <ExploreCard location="Cancun" country="Mexico"></ExploreCard>
        </Grid>

        <Grid item xd={6} />
      </Grid>
    </Grid>
  );
}
