import React, { useState } from "react";
import { Paper, TextField, Grid } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { useTheme, makeStyles } from "@material-ui/core/styles";

const signInStyles = makeStyles((theme) => ({
	// X BUTTON IN THE CORNER
	closeXContainer: {
		position: "absolute",
		left: "93%",
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
	//PAPER
	paper: {
		position: "relative",
		overflow: "hidden",
		width: "500px",
	},
	title: {
		padding: "1rem 1rem 0rem 1rem",
		marginTop: "2rem",
		marginBottom: "0.5rem",
	},
	subTitle: {
		color: `${theme.palette.primary.light}`,
		fontSize: "13px",
		textAlign: "center",
	},
	signInButton: {
		color: "white",
		fontSize: "16px",
		borderRadius: "6px",
		marginTop: "3rem",
		padding: ".5rem, 1rem, .5rem, 1rem",
	},
	footer: {
		border: "1px solid #e2e2ea",
		marginTop: "3rem",
		padding: "2rem 3rem 2rem 3rem",
	},
	footerText: {
		color: `${theme.palette.primary.light}`,
	},
	secondary: {
		color: `${theme.palette.secondary.main}`,
	},
}));

function SignIn() {
	const theme = useTheme();
	const classes = signInStyles(theme);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

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

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
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
							<h1 className={classes.title}>Sign In</h1>
						</Grid>

						<Grid item xs={7} className={classes.subTitle}>
							<p>
								Track Prices, organize travel plans and access
								member-only deals
							</p>
						</Grid>
					</Grid>

					{/* FORM SECTION */}

					<form onSubmit={handleFormSubmit} style={{ width: "100%" }}>
						<Grid
							container
							item
							xs={12}
							justify="center"
							alignItems="center"
						>
							<Grid item xs={8}>
								<Box mt={4.5}>
									<TextField
										id="Email"
										label="Email Address"
										variant="outlined"
										fullWidth={true}
										color="secondary"
										onChange={(e) => handleEmailChange(e)}
									/>
								</Box>
							</Grid>

							<Grid item xs={8}>
								<Box mt={2}>
									<TextField
										id="Password"
										label="Password"
										variant="outlined"
										fullWidth={true}
										color="secondary"
										type="password"
										onChange={(e) =>
											handlePasswordChange(e)
										}
									/>
								</Box>
							</Grid>
						</Grid>

						{/* BUTTON */}

						<Grid
							container
							justify="center"
							alignItems="center"
							item
						>
							<Grid item xs={5}>
								<Button
									color={"primary"}
									variant="contained"
									fullWidth={true}
									size="large"
									disableRipple={true}
									type="submit"
									className={classes.signInButton}
								>
									Sign In
								</Button>
							</Grid>
						</Grid>
					</form>

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

export default SignIn;
