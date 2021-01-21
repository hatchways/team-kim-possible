import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import AirportShuttleIcon from "@material-ui/icons/AirportShuttle";

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
});

const CarCard = (props) => {
  const classes = useStyles();
  const { car } = props;
  if (car) {
    return (
      <Grid
        container
        xs={3}
        direction="column"
        justify="space-between"
        alignItems="stretch"
        className={classes.root}
      >
        <Paper elevation={2} className={classes.paper}>
          <Grid item xs={12} className={classes.carDetail}>
            <Typography variant="h5">
              <b>{car.name}</b>
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.carDetail}>
            <Typography variant="h5" color="textSecondary">
              Or similar/Sedan
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <AirportShuttleIcon className={classes.carIcon} />
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
