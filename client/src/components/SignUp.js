import React, { useState } from "react";
import { Paper, TextField, Grid } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import SignInModalFooter from "./MuiComponents/SignInModalFooter";
import SignInModalHeader from "./MuiComponents/SignInModalHeader";
import CloseModal from "./MuiComponents/CloseModal";

const signUpStyles = makeStyles((theme) => ({
	paper: {
		position: "relative",
		overflow: "hidden",
		maxWidth: "500px",
	},
	continueButton: {
		color: "white",
		fontSize: "16px",
		borderRadius: "6px",
		marginTop: "3rem",
		padding: "0.75rem 5rem 0.75rem 5rem",
	},
}));

function SignUp() {
	const theme = useTheme();
	const classes = signUpStyles(theme);

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [passwordMatchError, setPasswordMatchError] = useState(false);
	const [passwordLengthError, setPasswordLengthError] = useState(false);
	const [emailValidationError, setEmailValidationError] = useState(false);

	const container = {
		backgroundColor: "#333",
		height: "100vh",
		width: "100vw",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	};

	const handleExit = () => {};

	const handleNameChange = (e) => {
		setName(e.target.value);
	};

	const validateEmail = (email) => {
		const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		return re.test(email.toLowerCase());
	};

	const handleEmailChange = (e) => {
		setEmailValidationError(false);
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPasswordLengthError(false);
		setPassword(e.target.value);
	};

	const handleConfirmPasswordChange = (e) => {
		setPasswordMatchError(false);
		setConfirmPassword(e.target.value);
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		if (!validateEmail(email)) {
			setEmailValidationError(true);
		}
		if (password.length <= 6) {
			setPasswordLengthError(true);
			return;
		}
		if (password !== confirmPassword) {
			setPasswordMatchError(true);
		}
		const userData = {
			name: name,
			email: email,
			password: password,
		};
	};

	return (
		<div style={container}>
			<Paper elevation={3} className={classes.paper}>
				<CloseModal
					cbExit={handleExit}
					modalContainer={true}
				></CloseModal>
				<Grid
					container
					direction="column"
					justify="center"
					alignItems="center"
				>
					{/* TOP TEXT - HEADER */}

					<SignInModalHeader
						title="Sign Up"
						subTitle="Track Prices, organize travel plans and access member-only deals"
					></SignInModalHeader>

					{/* FORM SECTION */}

					<form onSubmit={handleFormSubmit}>
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
										id="Name"
										label="Name"
										variant="outlined"
										fullWidth={true}
										color="secondary"
										onChange={(e) => handleNameChange(e)}
									/>
								</Box>
							</Grid>

							<Grid item xs={8}>
								<Box mt={2}>
									{emailValidationError ? (
										<TextField
											error
											id="filled-error-helper-text"
											label="Email Address"
											fullWidth={true}
											helperText="Must be a valid email."
											variant="outlined"
											onChange={(e) =>
												handleEmailChange(e)
											}
										/>
									) : (
										<TextField
											id="Email"
											label="Email Address"
											variant="outlined"
											fullWidth={true}
											color="secondary"
											onChange={(e) =>
												handleEmailChange(e)
											}
										/>
									)}
								</Box>
							</Grid>

							<Grid item xs={8}>
								<Box mt={2}>
									{passwordLengthError ? (
										<TextField
											error
											id="filled-error-helper-text"
											label="Password"
											fullWidth={true}
											helperText="Passwords must be greater than 6 characters."
											variant="outlined"
											type="password"
											onChange={(e) =>
												handlePasswordChange(e)
											}
										/>
									) : (
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
									)}
								</Box>
							</Grid>

							<Grid item xs={8}>
								<Box mt={2}>
									{passwordMatchError ? (
										<TextField
											error
											id="filled-error-helper-text"
											label="Confirm Password"
											fullWidth={true}
											helperText="Passwords must match."
											variant="outlined"
											type="password"
											onChange={(e) =>
												handleConfirmPasswordChange(e)
											}
										/>
									) : (
										<TextField
											id="Confirm-Password"
											label="Confirm Password"
											variant="outlined"
											fullWidth={true}
											color="secondary"
											type="password"
											onChange={(e) =>
												handleConfirmPasswordChange(e)
											}
										/>
									)}
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
							<Grid item xs={4}>
								<Button
									color={"primary"}
									variant="contained"
									fullWidth={true}
									size="large"
									disableRipple={true}
									type="submit"
									className={classes.continueButton}
								>
									Continue
								</Button>
							</Grid>
						</Grid>
					</form>

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

export default SignUp;
