import React from "react";
import { Grid, Typography, Container } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import { makeStyles } from "@material-ui/core/styles";
import { hotels } from "./hotels";
import { Wrapper } from "./styled";
import Image from "material-ui-image";

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
      <Grid container className="ht">
        <Grid item xs={12} sm={4}>
          <Image src="/images/hotel1.jpg" />
        </Grid>
        <Grid
          container
          xs={12}
          sm={4}
          direction="column"
          justify="space-evenly"
        >
          <Typography variant="h4">W-Bali-Semiynak</Typography>
          <Container>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </Container>
          <Typography variant="subtitle1" className="subtitle">
            W-Bali-Semiynak
          </Typography>
          <Grid container>
            <Grid item sm={2} className="rating">
              {" "}
              8.1
            </Grid>
            <Grid item sm={10} className="review-wrapper">
              <Typography variant="" display="block" className="review-content">
                Excellent
              </Typography>
              <Typography variant="">597 Reviews</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid container xs={12} sm={4} direction="column">
          <Typography variant="" display="block">
            $175
          </Typography>
          <Typography variant="" display="block">
            per night
          </Typography>
        </Grid>
      </Grid>

      <Grid container className="ht">
        <Grid item xs={12} sm={4}>
          <Image src="/images/hotel2.jpg" />
        </Grid>
        <Grid item xs={12} sm={4} className="wrapper">
          <Typography variant="h4">W-Bali-Semiynak</Typography>
          <Container>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </Container>
          <Typography variant="subtitle1">W-Bali-Semiynak</Typography>
          <Grid container>
            <Grid item sm={2}>
              {" "}
              8.1
            </Grid>
            <Grid item sm={10}>
              <Typography variant="" display="block">
                Excellent
              </Typography>
              <Typography variant="">597 Reviews</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="" display="block">
            $175
          </Typography>
          <Typography variant="">per night</Typography>
        </Grid>
      </Grid>

      <Grid container className="ht">
        <Grid item xs={12} sm={4}>
          <Image src="/images/hotel3.jpg" />
        </Grid>
        <Grid item xs={12} sm={4} className="wrapper">
          <Typography variant="h4">W-Bali-Semiynak</Typography>
          <Container>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </Container>
          <Typography variant="subtitle1">W-Bali-Semiynak</Typography>
          <Grid container>
            <Grid item sm={2}>
              {" "}
              8.1
            </Grid>
            <Grid item sm={10}>
              <Typography variant="" display="block">
                Excellent
              </Typography>
              <Typography variant="">597 Reviews</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="" display="block">
            $175
          </Typography>
          <Typography variant="">per night</Typography>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default HotelList;
