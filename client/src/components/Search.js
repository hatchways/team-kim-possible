import React, { useState, useRef } from "react";
import "date-fns";
import {
  Grid,
  Divider,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { makeStyles } from "@material-ui/core/styles";

import { getCityId, getRouteData, getCityName } from "../utils/skyscanner";

const useStyles = makeStyles({
  root: {
    height: "90px",
    width: "80%",
    background: "white",
    margin: "0 auto",
    borderRadius: "20px",
    boxShadow: "0 0 5px 5px rgba(221, 221, 240, 0.7)",
    display: "flex",
    alignItems: "center",
  },
  item: {
    padding: "0 20px",
  },
  btn: {
    backgroundColor: "#FAAC2F",
    color: "white",
    padding: "10px 20px",
    border: "none",
    marginTop: "3px",
    borderRadius: "5px",
  },
  formControl: {
    marginTop: "16px",
  },
  input: {
    fontSize: "0.8rem",
  },
  optionsContainer: {
    display: "absolute",
  },
});
const Search = (props) => {
  const classes = useStyles();
  const { state, setState } = props;

  const [optionsDeparture, setOptionsDeparture] = useState([]);
  const [optionsArrival, setOptionsArrival] = useState([]);

  const timeoutRef1 = useRef();
  const timeoutRef2 = useRef();

  const handleSubmit = async () => {
    const departureLocationId = await getCityId(state.departureCity);
    const arrivalLocationId = await getCityId(state.arrivalCity);
    const routeData = await getRouteData(
      departureLocationId,
      arrivalLocationId,
      state.departureDate.toISOString().slice(0, 10),
      state.arrivalDate.toISOString().slice(0, 10)
    );
    setState({ ...state, routeData: routeData.data });
  };

  return (
    <div className={classes.root}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container>
          <Grid item xs={12} sm={2} className={classes.item}>
            <Autocomplete
              className={classes.formControl}
              options={optionsDeparture}
              autoComplete
              autoHighlight
              groupLabel
              value={state.departureCity}
              getOptionLabel={(option) => option}
              onChange={(_, newValue) => {
                setState(() => ({ ...state, departureCity: newValue }));
              }}
              onInputChange={(_, newInputValue) => {
                if (timeoutRef1.current) {
                  clearTimeout(timeoutRef1.current);
                }
                timeoutRef1.current = setTimeout(async () => {
                  const response = await getCityName(newInputValue);
                  setOptionsDeparture(response);
                }, 500);
              }}
              renderInput={(params) => <TextField {...params} label="From" />}
            />

            <Divider orientation="vertical" flexItem />
          </Grid>

          <Grid item xs={12} sm={2} className={classes.item}>
            <Autocomplete
              className={classes.formControl}
              options={optionsArrival}
              autoHighlight
              autoComplete
              includeInputInList
              value={state.arrivalCity}
              getOptionLabel={(option) => option}
              onChange={(_, newValue) => {
                setState(() => ({ ...state, arrivalCity: newValue }));
              }}
              onInputChange={async (_, newInputValue) => {
                if (timeoutRef2.current) {
                  clearTimeout(timeoutRef2.current);
                }
                timeoutRef2.current = setTimeout(async () => {
                  const response = await getCityName(newInputValue);
                  setOptionsArrival(response);
                }, 500);
              }}
              renderInput={(params) => (
                <TextField {...params} label="To" shrink />
              )}
            />
            <Divider orientation="vertical" flexItem />
          </Grid>
          <Grid item xs={12} sm={2} className={classes.item}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              className={classes.input}
              label="Departure"
              value={state.departureDate}
              minDate={new Date()}
              onChange={(e) => setState({ ...state, departureDate: e })}
            />
            <Divider orientation="vertical" flexItem />
          </Grid>
          <Grid item xs={12} sm={2} className={classes.item}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              className={classes.input}
              label="Arrival"
              value={state.arrivalDate}
              minDate={new Date()}
              onChange={(e) => setState({ ...state, arrivalDate: e })}
            />
            <Divider orientation="vertical" flexItem />
          </Grid>
          <Grid item xs={12} sm={2} className={classes.item}>
            <FormControl className={classes.formControl}>
              <InputLabel shrink>Travellers</InputLabel>
              <Select
                className={classes.input}
                name="numOfTravellers"
                value={state.numOfTravellers}
                onChange={(e) =>
                  setState({ ...state, numOfTravellers: e.target.value })
                }
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
              </Select>
            </FormControl>
            <Divider orientation="vertical" flexItem />
          </Grid>
          <Grid item xs={12} sm={2} className={classes.item}>
            <FormControl className={classes.formControl}>
              <Button
                class={classes.btn}
                variant="contained"
                type="submit"
                onClick={handleSubmit}
              >
                {" "}
                Search
              </Button>
            </FormControl>
          </Grid>
        </Grid>
      </MuiPickersUtilsProvider>
    </div>
  );
};

export default Search;
