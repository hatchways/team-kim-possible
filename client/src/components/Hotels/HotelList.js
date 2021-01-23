import React from "react";
import { Grid, Typography, Container } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import { makeStyles } from "@material-ui/core/styles";
import { hotels } from "./hotels";
import Image from "material-ui-image";

const useStyles = makeStyles({
  wrapper: {
    padding: "20px",
    background: "#fff",
    marginBottom: "20px",
    borderRadius: "10px",
  },
  img: {
    borderRadius: "10px",
  },
  container: {
    padding: "0",
  },
  grid5: {
    paddingLeft: "10px",
  },
  grid3: {
    paddingBottom: "20px",
  },
  icon: {
    color: "#facd39",
  },
  location: {
    color: "#c98ef5",
    fontWeight: "400",
  },
  number: {
    color: "#c98ef5",
    fontWeight: "400",
  },
  nights: {
    color: "#c98ef5",
    fontWeight: "400",
  },
  rating: {
    backgroundColor: "#4577ff",
    color: "#fff",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  reviews: {
    paddingLeft: "5px",
  },
  content: {
    fontWeight: "500",
  },
  nights: {
    fontSize: "0.9rem",
  },
});
const HotelList = () => {
  const classes = useStyles();
  return (
    <div className="root">
      {hotels.map((hotel) => (
        <Grid container className={classes.wrapper}>
          <Grid item xs={12} sm={4}>
            <Image
              src={hotel.image}
              cover
              aspectRatio={4 / 3}
              className={classes.img}
            />
          </Grid>
          <Grid
            container
            xs={12}
            sm={5}
            direction="column"
            justify="space-evenly"
            className={classes.grid5}
          >
            <Typography variant="h4">{hotel.name}</Typography>
            <Container className={classes.container}>
              {[...new Array(5)].map((i) => (
                <StarIcon className={classes.icon} />
              ))}
            </Container>
            <Typography variant="h6" className={classes.location}>
              {hotel.location}
            </Typography>
            <Grid container>
              <Grid item sm={2} className={classes.rating}>
                {" "}
                {hotel.reviews.score}
              </Grid>
              <Grid item sm={10} className={classes.reviews}>
                <Typography display="block" className={classes.content}>
                  {hotel.reviews.review}
                </Typography>
                <Typography display="block" className={classes.number}>
                  {hotel.reviews.numberOfReviews} reviews
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            xs={12}
            sm={3}
            direction="column"
            justify="flex-end"
            className={classes.grid3}
          >
            <Typography variant="h3" display="block">
              {hotel.price}
            </Typography>
            <Typography variant="" display="block" className={classes.nights}>
              per night
            </Typography>
          </Grid>
        </Grid>
      ))}
    </div>
  );
};

export default HotelList;
