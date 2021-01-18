import React, { useState } from "react";
import { Paper, TextField, Grid } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import SignInModalFooter from "./MuiComponents/SignInModalFooter";
import SignInModalHeader from "./MuiComponents/SignInModalHeader";
import CloseModal from "./MuiComponents/CloseModal";
import axios from "axios";

const signInStyles = makeStyles((theme) => ({
	container: {
		position: "fixed",
		width: "100%",
		height: "100%",
		top: "0",
		right: "0",
		bottom: "0",
		margin: "auto",
		backgroundColor: "rgba(0,0,0, 0.5)",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	paper: {
		position: "relative",
		overflow: "hidden",
		width: "500px",
	},
	signInButton: {
		color: "white",
		fontSize: "16px",
		borderRadius: "6px",
		marginTop: "3rem",
		padding: ".5rem, 1rem, .5rem, 1rem",
	},
}));

function SignIn() {
	const theme = useTheme();
	const classes = signInStyles(theme);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleExit = () => {};

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const userData = {
		email: email,
		password: password,
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		axios.post("/login", userData);
	};

	return (
		<div className={classes.container}>
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
						title="Sign In"
						subTitle="Track Prices, organize travel plans and access member-only deals"
					/>

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

					<SignInModalFooter
						primaryText={"Don't have an account?"}
						secondaryText={"Sign Up"}
					/>
				</Grid>
			</Paper>
		</div>
	);
}

export default SignIn;
