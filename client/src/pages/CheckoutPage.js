import React, { useContext, useEffect } from "react";
import { Paper, Typography, Grid } from "@material-ui/core";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import { Elements } from "@stripe/react-stripe-js";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import { loadStripe } from "@stripe/stripe-js";
import FlightLandIcon from "@material-ui/icons/FlightLand";
import ApartmentIcon from "@material-ui/icons/Apartment";
import { ShoppingCartContext } from "../components/ShoppingCartContext";
import axios from "axios";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import CheckoutForm from "../components/CheckoutForm";

const checkoutStyles = makeStyles((theme) => ({
  cartSummaryContainer: {
    width: "40%",
    borderLeft: `1px solid ${theme.palette.primary.light}`,
    padding: "2rem",
    textAlign: "center",
  },
  flightContainer: {
    margin: "1rem 0.5rem 1rem 0.5rem",
  },
  destinationText: {
    marginTop: "1rem",
    textAlign: "center",
  },
  checkoutContainer: {
    width: "60%",
    backgroundColor: "#ebf0f7",
  },
  checkoutPaper: {
    marginTop: "2rem",
    padding: "1.5rem 1rem 1.5rem 1rem",
    width: "80%",
  },
  pageContainer: {
    height: "calc(100vh - 64px)",
  },
  carText: {
    textAlign: "center",
  },
  subTotalContainer: {
    borderTop: `1px solid ${theme.palette.primary.light}`,
    marginTop: `1rem`,
    paddingTop: "1rem",
  },
  priceText: {
    marginLeft: "1rem",
  },
  icons: {
    paddingRight: "8px",
    marginBottom: "-7px",
  },
}));

function CheckoutPage() {
  const theme = useTheme();
  const classes = checkoutStyles(theme);

  const [shoppingCart, setShoppingCart] = useContext(ShoppingCartContext);

  let car,
    hotel,
    flight = false;

  useEffect(() => {
    const fetchCart = async () => {
      try {
        await axios.get("/shopping-cart/get-cart").then((data) => {
          setShoppingCart(data.data.cart);
        });
      } catch (e) {
        console.log(e);
      }
    };

    fetchCart();
  }, []);

  let prices = [];

  for (let i = 0; i < shoppingCart.length; i++) {
    if (shoppingCart[i].type === "car") {
      car = shoppingCart[i];
    }
    if (shoppingCart[i].type === "hotel") {
      hotel = shoppingCart[i];
    }
    if (shoppingCart[i].type === "flight") {
      flight = shoppingCart[i];
    }
    prices.push(parseInt(shoppingCart[i].price));
  }

  const totalCartText = () => {
    return (
      <>
        <Grid item>
          <Typography variant='h5'>Subtotal: {""} </Typography>
        </Grid>
        <Grid item className={classes.priceText}>
          <Typography variant='h5'>
            $
            {prices.length > 0
              ? prices.reduce((total, amount) => total + amount)
              : null}
          </Typography>
        </Grid>
      </>
    );
  };

  const stripePromise = loadStripe(
    "pk_test_51IBWOAIGBdXhz29TWRY6MjXouhgfvf3wtJMx3b3hwEozhBQ1so2qxP5WpFLdBwMX0IpIdJsC2LJ0EmKwkBAYHqEF005V3RV8A9"
  );

  return (
    <Grid container justify='center' className={classes.pageContainer}>
      <Grid
        item
        className={classes.checkoutContainer}
        container
        justify='center'
        alignItems='center'>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </Grid>
      <Grid item className={classes.cartSummaryContainer}>
        <Grid container justify='center' alignItems='center' direction='column'>
          <Typography variant='h4'>Order Summary</Typography>
          <Paper className={classes.checkoutPaper} elevation={2}>
            <Grid container direction='column'>
              <Grid item container>
                {flight ? (
                  <Grid container item className={classes.flightContainer}>
                    <Grid item>
                      <Typography variant={"h6"}>Flight:</Typography>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      container
                      justify='space-between'
                      alignItems='center'>
                      <Grid
                        item
                        container
                        xs={6}
                        direction='column'
                        className={classes.destinationText}>
                        <Typography variant='body1'>
                          <FlightTakeoffIcon
                            fontSize='large'
                            className={classes.icons}
                          />
                          <strong>{flight.originPlace}</strong>
                        </Typography>
                        <Typography variant='body1'>to</Typography>
                        <Typography variant='body1'>
                          <FlightLandIcon
                            fontSize='large'
                            className={classes.icons}
                          />
                          <strong>{flight.destinationPlace}</strong>
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        container
                        xs={6}
                        justify='flex-end'
                        alignItems='center'>
                        <Typography variant='h6'>
                          <em>${flight.price}</em>
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                ) : null}
                {hotel ? (
                  <Grid
                    item
                    container
                    className={
                      (classes.totalTopSpacing, classes.flightContainer)
                    }
                    direction='column'>
                    <Grid item container>
                      <Typography variant={"h6"}>Hotel:</Typography>
                      <Grid
                        item
                        xs={12}
                        container
                        justify='space-between'
                        alignItems='center'>
                        <Grid
                          item
                          container
                          xs={6}
                          direction='column'
                          className={classes.carText}>
                          <Typography variant='body1'>
                            <ApartmentIcon
                              fontSize='large'
                              className={classes.icons}
                            />
                            <strong>{hotel.name}</strong>
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          container
                          xs={6}
                          justify='flex-end'
                          alignItems='center'>
                          <Typography variant='h6'>
                            <em>${hotel.price}</em>
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                ) : null}
                {car ? (
                  <Grid
                    item
                    container
                    className={
                      (classes.totalTopSpacing, classes.flightContainer)
                    }
                    direction='column'>
                    <Grid item container>
                      {" "}
                      <Typography variant={"h6"}>Car:</Typography>
                      <Grid
                        item
                        xs={12}
                        container
                        justify='space-between'
                        alignItems='center'>
                        <Grid
                          item
                          container
                          xs={6}
                          direction='column'
                          className={classes.carText}>
                          <Typography variant='body1'>
                            <DirectionsCarIcon
                              fontSize='large'
                              className={classes.icons}
                            />
                            <strong>{car.name}</strong>
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          container
                          xs={6}
                          justify='flex-end'
                          alignItems='center'>
                          <Typography variant='h6'>
                            <em>${car.price}</em>
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                ) : null}
              </Grid>
              <Grid
                item
                container
                justify='center'
                direction='row'
                className={classes.subTotalContainer}>
                {totalCartText()}
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CheckoutPage;
