import React, { useState } from "react";
import { Paper, Grid } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import axios from "axios";

const exploreCardStyles = makeStyles((theme, props) => ({
  mainPaper: (props) => ({
    background: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.6) 90%, rgba(0, 0, 0, 0.65) 100%), url(https://team-kim-possible.s3.us-east-2.amazonaws.com/images/${props.imgName}) center center/cover no-repeat `,
    borderRadius: "18px",
  }),
  emptyTopSpace: {
    paddingTop: "23rem",
  },
  cardDataContainer: {
    borderTop: `1px solid ${theme.palette.primary.light}`,
  },
  locationText: {
    color: "white",
    fontSize: "23px",
    margin: "1rem 0rem 0rem 2rem",
    padding: "0rem",
  },
  locationCountryText: {
    color: `${theme.palette.primary.light}`,
    fontSize: "19px",
    margin: "0rem 0rem 1.5rem 2rem",
  },

  favoriteIcon: {
    marginRight: "2rem",
    height: "2rem",
    width: "2rem",
    color: "white",
  },
  favoriteIconLiked: {
    color: `${theme.palette.primary.main}`,
    marginRight: "2rem",
    height: "2rem",
    width: "2rem",
  },
  link: {
    position: "absolute",
    display: "flex",
    borderRadius: "18px 18px 0 0",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0)",
    color: "rgba(255,255,255,0)",
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.5)",
      color: "rgba(255,255,255,1)",
    },
  },
}));

function ExploreCard(props) {
  const { alreadyLiked, location } = props;
  const classes = exploreCardStyles(location);

  const [liked, setLike] = useState(alreadyLiked);
  if (location.location === "Sapporo" || "Amsterdam") {
  }
  const handleLiked = async () => {
    const response = await axios.put("/favorites", { location, add: !liked });
    setLike((prev) => !prev);
  };
  return (
    <Paper elevation={1} className={classes.mainPaper}>
      <Grid container direction="column" justify="center">
        <Grid item xs={12} className={classes.emptyTopSpace}>
          <Link
            href={`/?destination=${location.location}`}
            underline="none"
            className={classes.link}
          >
            <Typography variant="h4">
              Book a flight to {location.location}!
            </Typography>
          </Link>
        </Grid>
        <Grid container item xs={12} className={classes.cardDataContainer}>
          <Grid item xs={6} container justify="flex-start" alignItems="center">
            <Grid item xs={12}>
              <p className={classes.locationText}>{location.location},</p>
            </Grid>
            <Grid item xs={12}>
              <p className={classes.locationCountryText}>{location.country}</p>
            </Grid>
          </Grid>
          <Grid
            item
            xs={3}
            container
            justify="center"
            alignItems="center"
          ></Grid>{" "}
          <FavoriteIcon
            className={liked ? classes.favoriteIconLiked : classes.favoriteIcon}
            onClick={() => handleLiked()}
          ></FavoriteIcon>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default ExploreCard;
