import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: { border: "1px" },
  paper: { padding: "15px" },
  carDetail: {
    textAlign: "left",
    display: "flex",
    margin: "10px 0",
  },
  carIcon: {
    fontSize: "100px",
  },
  carImage: {
    height: "100%",
    maxHeight: "200px",
    maxWidth: "100%",
  },
});

const CarCard = (props) => {
  const classes = useStyles(props);
  const { car } = props;
  if (car) {
    return (
      <Grid item xs={6} md={4} className={classes.root}>
        <Paper elevation={2} className={classes.paper}>
          <Grid item xs={12} className={classes.carDetail}>
            <Typography variant="h5">
              <b>{car.name}</b>
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.carDetail}>
            <Typography variant="h5" color="textSecondary">
              Or similar
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <img
              src={`${process.env.PUBLIC_URL}/images/${car.imageUrl}.png`}
              alt="Car belongs here!"
              className={classes.carImage}
            />
          </Grid>
          <Grid item xs={12} className={classes.carDetail}>
            <Typography variant="h4">
              <b> ${car.rate}</b>
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              /per day
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.carDetail}>
            <Typography variant="h6">
              <b> ${car.total} Total</b>
            </Typography>
          </Grid>
        </Paper>
      </Grid>
    );
  }
  return <div>No car </div>;
};
export default CarCard;
