import React from "react";
import "date-fns";
import {
	Grid,
	Divider,
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
} from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from "@material-ui/pickers";
import { makeStyles } from "@material-ui/core/styles";

import { getCityId, getRouteData } from "../utils/skyscanner";

const cities = ["Paris", "London", "Seattle"];
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
		width: "100%",
		marginTop: "16px",
	},
	input: {
		fontSize: "0.8rem",
	},
});
const Search = (props) => {
	const classes = useStyles();
	const { state, setState } = props;

	const handleChange = (e) => {
		setState({ ...state, [e.target.name]: e.target.value });
	};
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
						<FormControl className={classes.formControl}>
							<InputLabel shrink>From</InputLabel>
							<Select
								className={classes.input}
								name="departureCity"
								value={state.departureCity}
								onChange={handleChange}
								displayEmpty
							>
								<MenuItem disabled value="">
									<em>City</em>
								</MenuItem>
								{cities.map((city) => (
									<MenuItem value={city}>{city}</MenuItem>
								))}
							</Select>
						</FormControl>
						<Divider orientation="vertical" flexItem />
					</Grid>

					<Grid item xs={12} sm={2} className={classes.item}>
						<FormControl className={classes.formControl}>
							<InputLabel shrink>Where to go</InputLabel>
							<Select
								className={classes.input}
								name="arrivalCity"
								value={state.arrivalCity}
								onChange={handleChange}
								displayEmpty
							>
								<MenuItem disabled value="">
									<em>City</em>
								</MenuItem>
								{cities.map((city) => (
									<MenuItem value={city}>{city}</MenuItem>
								))}
							</Select>
						</FormControl>
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
							onChange={(e) =>
								setState({ ...state, arrivalDate: e })
							}
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
							onChange={(e) =>
								setState({ ...state, departureDate: e })
							}
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
								onChange={handleChange}
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
