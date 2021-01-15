import React from "react";
import { Paper, Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import SignInModalFooter from "./MuiComponents/SignInModalFooter";
import SignInModalHeader from "./MuiComponents/SignInModalHeader";
import CloseModal from "./MuiComponents/CloseModal";

const signUp2Styles = makeStyles((theme) => ({
	sidePadding: {
		padding: "0rem 1rem 0rem 1rem",
	},
	paper: {
		position: "relative",
		overflow: "hidden",
		width: "500px",
	},

	locationPaper: {
		margin: "0.5rem 0 0.5rem 0",
	},
	locationText: {
		marginLeft: "1.25rem",
		fontWeight: "bold",
	},
	locationIcon: {
		paddingLeft: "0.75rem",
		color: `${theme.palette.secondary.main}`,
	},
	pr1: {
		paddingRight: "1rem",
	},

	mt2: {
		marginTop: "2rem",
	},
	signUpButton: {
		color: "white",
		fontSize: "16px",
		borderRadius: "6px",
		marginTop: "2.5rem",
		padding: "0.5rem, 1rem, 0.5rem, 1rem",
	},
	secondary: {
		color: `${theme.palette.secondary.main}`,
	},
}));

function SignUpPage2() {
	const theme = useTheme();
	const classes = signUp2Styles(theme);

	const container = {
		backgroundColor: "#333",
		height: "100vh",
		width: "100vw",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	};

	const handleExit = () => {};

	return (
		<div style={container}>
			<Paper elevation={3} className={classes.paper}>
				<CloseModal cb={handleExit} modalContainer={true}></CloseModal>
				<Grid
					container
					direction="column"
					justify="center"
					alignItems="center"
				>
					{/* TOP TEXT - HEADER */}

					<SignInModalHeader
						title="Sign Up"
						subTitle="Please select your favorite travel destinations"
					/>

					{/* LOCATION SECTION */}

					<Grid
						container
						item
						xs={12}
						justify="center"
						alignItems="center"
					>
						<Grid item xs={9} className={classes.mt2}>
							<Paper
								variant="outlined"
								elevation={0}
								className={classes.locationPaper}
							>
								<Grid
									container
									alignItems="center"
									justify="flex-start"
								>
									<Grid item xs={1}>
										<RoomOutlinedIcon
											className={classes.locationIcon}
										></RoomOutlinedIcon>
									</Grid>
									<Grid item xs={3}>
										<p className={classes.locationText}>
											Paris
										</p>
									</Grid>
									<Grid
										container
										justify="flex-end"
										item
										xs={8}
										className={classes.pr1}
									>
										<CloseModal
											cb={null}
											modalContainer={false}
										></CloseModal>
									</Grid>
								</Grid>
							</Paper>
						</Grid>
						<Grid item xs={9}>
							<Paper
								variant="outlined"
								elevation={0}
								className={classes.locationPaper}
							>
								<Grid
									container
									alignItems="center"
									justify="flex-start"
								>
									<Grid item xs={1}>
										<RoomOutlinedIcon
											className={classes.locationIcon}
										></RoomOutlinedIcon>
									</Grid>
									<Grid item xs={3}>
										<p className={classes.locationText}>
											Bali
										</p>
									</Grid>
									<Grid
										container
										justify="flex-end"
										item
										xs={8}
										className={classes.pr1}
									>
										<CloseModal
											cb={handleExit}
											modalContainer={false}
										></CloseModal>
									</Grid>
								</Grid>
							</Paper>
						</Grid>
						<Grid container item xs={4} justify="center">
							<p className={classes.secondary}>Add More</p>
						</Grid>
					</Grid>

					{/* BUTTON */}

					<Grid container justify="center" alignItems="center" item>
						<Grid item xs={5}>
							<Button
								color={"primary"}
								variant="contained"
								fullWidth={true}
								size="large"
								disableRipple={true}
								type="submit"
								className={classes.signUpButton}
							>
								Sign Up
							</Button>
						</Grid>
					</Grid>

					{/* FOOTER */}

					<SignInModalFooter
						primaryText={"Already have an account?"}
						secondaryText={"Sign In"}
					/>
				</Grid>
			</Paper>
		</div>
	);
}

export default SignUpPage2;
