import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

//The existence of this component is primarily so the CarRentalPage is not rerendered everytime
//a search element (such as return location) is changed

const useStyles = makeStyles({
  searchItemContainer: {
    padding: "0 10px",
    border: "1px solid #A9A9A9",
    borderRadius: "10px",
  },
  searchItem: {
    textAlign: "left",
    padding: "15px 5px",
  },
  right: {
    borderLeft: "1px solid #A9A9A9",
  },
});

const CarRentalSearch = () => {
  const classes = useStyles();

  return (
    <Grid container xs={12} justify="space-between" alignItems="center">
      <Grid container xs={5} className={classes.searchItemContainer}>
        <Grid item xs={6} className={classes.searchItem}>
          Pickup
        </Grid>
        <Grid item xs={6} className={`${classes.searchItem} ${classes.right}`}>
          Return
        </Grid>
      </Grid>
      <Grid container xs={5} className={classes.searchItemContainer}>
        <Grid item xs={6} className={classes.searchItem}>
          Pickup date
        </Grid>
        <Grid item xs={6} className={`${classes.searchItem} ${classes.right}`}>
          Return date
        </Grid>
      </Grid>
    </Grid>
  );
};
export default CarRentalSearch;
