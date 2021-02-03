import React, { useState } from "react";
import { Paper, Grid } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { motion } from "framer-motion";

const exploreCardStyles = makeStyles((theme, props) => ({
  mainPaper: (props) => ({
    background: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.6) 90%, rgba(0, 0, 0, 0.65) 100%), url(https://team-kim-possible.s3.us-east-2.amazonaws.com/images/${props.imgName}) center center/cover no-repeat `,
    borderRadius: "18px",
  }),
  emptyTopSpace: {
    minHeight: "23rem",
    position: "relative",
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
}));

function ExploreCard(props) {
  const classes = exploreCardStyles(props);

  const [liked, setLike] = useState(false);

  const handleLiked = () => {
    setLike((prev) => !prev);
    // props.onLike();
  };

  return (
    <Paper elevation={1} className={classes.mainPaper}>
      <Grid container direction='column' justify='center'>
        <Grid item xs={12} className={classes.emptyTopSpace}></Grid>
        <Grid container item xs={12} className={classes.cardDataContainer}>
          <Grid item xs={6} container justify='flex-start' alignItems='center'>
            <Grid item xs={12}>
              <p className={classes.locationText}>{props.location},</p>
            </Grid>
            <Grid item xs={12}>
              <p className={classes.locationCountryText}>{props.country}</p>
            </Grid>
          </Grid>
          <Grid item xs={6} container justify='flex-end' alignItems='center'>
            {liked ? (
              <motion.div
                intial={{ scale: 1 }}
                animate={{ scale: [1, 1.1, 1.2, 0.9, 0.85, 0.9, 1.2] }}
                transition={{ duration: 0.35 }}>
                <FavoriteIcon
                  className={classes.favoriteIconLiked}
                  onClick={() => handleLiked()}></FavoriteIcon>
              </motion.div>
            ) : (
              <motion.div animate={{}}>
                <FavoriteIcon
                  className={classes.favoriteIcon}
                  onClick={() => handleLiked()}></FavoriteIcon>
              </motion.div>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default ExploreCard;
