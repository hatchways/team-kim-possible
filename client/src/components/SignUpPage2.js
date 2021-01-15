import React from "react";
import { Paper, Grid } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";

const signUp2Styles = makeStyles((theme) => ({
	// X BUTTON IN THE CORNER
	closeXContainer: {
		position: "absolute",
		left: "90%",
		top: "2%",
		height: "20px",
		width: "20px",
		textAlign: "center",
	},
	closeX1: {
		height: "20px",
		width: "2px",
		marginLeft: "12px",
		backgroundColor: `${theme.palette.primary.light}`,
		transform: " rotate(45deg)",
		zIndex: "1",
	},
	closeX2: {
		height: "20px",
		width: "2px",
		backgroundColor: `${theme.palette.primary.light}`,
		transform: " rotate(90deg)",
		zIndex: "2",
	},

	sidePadding: {
		padding: "0rem 1rem 0rem 1rem",
	},
	//PAPER
	paper: {
		position: "relative",
		overflow: "hidden",
		width: "500px",
	},
	title: {
		padding: "1rem 1rem 0rem 1rem",
		marginTop: "2rem",
		marginBottom: "1rem",
	},
	subTitle: {
		color: `${theme.palette.primary.light}`,
		fontSize: "13px",

		textAlign: "center",
		marginBottom: "1rem",
	},
	locationPaper: {
		margin: "1rem 0 0.5rem 0",
	},
	locationText: {
		marginLeft: "1.25rem",
		fontWeight: "bold",
	},

	locationIcon: {
		paddingLeft: "0.75rem",
		color: `${theme.palette.secondary.main}`,
	},
	spacingRight: {
		paddingRight: "1rem",
	},
	signUpButton: {
		color: "white",
		fontSize: "16px",
		borderRadius: "6px",
		marginTop: "2.5rem",
		padding: "0.5rem, 1rem, 0.5rem, 1rem",
	},
	footer: {
		borderTop: "1px solid #e2e2ea",
		marginTop: "4rem",
		padding: "2rem 3rem 2rem 3rem",
	},
	footerText: {
		color: `${theme.palette.primary.light}`,
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

	const handleExit = () => {
		console.log("exit");
	};

	return (
		<div style={container}>
			{/* TOP TEXT - HEADER */}

			<Paper elevation={3} className={classes.paper}>
				<Box
					className={classes.closeXContainer}
					onClick={() => handleExit()}
				>
					<div className={classes.closeX1}>
						<div className={classes.closeX2}></div>
					</div>
				</Box>
				<Grid
					container
					direction="column"
					justify="center"
					alignItems="center"
				>
					<Grid
						container
						item
						xs={12}
						justify="center"
						alignItems="center"
						direction="column"
					>
						<Grid item>
							<h1 className={classes.title}>Sign Up</h1>
						</Grid>

						<Grid item xs={7} className={classes.subTitle}>
							<p>
								Please select your favorite travel destinations
							</p>
						</Grid>
					</Grid>

					{/* LOCATION SECTION */}

					<Grid
						container
						item
						xs={12}
						justify="center"
						alignItems="center"
					>
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
											Paris
										</p>
									</Grid>
									<Grid
										container
										justify="flex-end"
										item
										xs={8}
										className={classes.spacingRight}
									>
										<div className={classes.closeX1}>
											<div
												className={classes.closeX2}
											></div>
										</div>
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
										className={classes.spacingRight}
									>
										<div className={classes.closeX1}>
											<div
												className={classes.closeX2}
											></div>
										</div>
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

					<Grid
						container
						item
						xs={12}
						className={classes.footer}
						justify="center"
						alignItems="center"
					>
						<Grid item>
							<span className={classes.footerText}>
								Don't Have An Account?{" "}
							</span>
							<span className={classes.secondary}>Sign Up</span>
						</Grid>
					</Grid>
				</Grid>
			</Paper>
		</div>
	);
}

export default SignUpPage2;
