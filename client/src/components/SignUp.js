import React, { useState } from "react";
import { Paper, TextField, Grid, FormHelperText } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import SignInModalFooter from "./MuiComponents/SignInModalFooter";
import SignInModalHeader from "./MuiComponents/SignInModalHeader";
import CloseModal from "./MuiComponents/CloseModal";
import { useHistory } from "react-router-dom";
import axios from "axios";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";

const signUpStyles = makeStyles((theme) => ({
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
	continueButton: {
		color: "white",
		fontSize: "16px",
		borderRadius: "6px",
		marginTop: "3rem",
		padding: "0.75rem 5rem 0.75rem 5rem",
	},
	sidePadding: {
		padding: "0rem 1rem 0rem 1rem",
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
	signUpErrText: {
		marginTop: "2rem",
		fontSize: "1rem",
	},
}));

function SignUp(props) {
	const theme = useTheme();
	const classes = signUpStyles(theme);

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [passwordMatchError, setPasswordMatchError] = useState(false);
	const [nameError, setNameError] = useState(false);
	const [passwordLengthError, setPasswordLengthError] = useState(false);
	const [emailValidationError, setEmailValidationError] = useState(false);
	const [signUpErr, setSignUpErr] = useState(false);
	const [page, setPage2] = useState(false);

	const page1 = () => {
		return (
			<div>
				<Grid
					container
					item
					xs={12}
					justify="center"
					alignItems="center"
				>
					<Grid item xs={8}>
						<Box mt={4.5}>
							{nameError ? (
								<TextField
									error
									id="filled-error-helper-text"
									label="Name"
									fullWidth={true}
									helperText="Please put a name."
									variant="outlined"
									onChange={(e) => handleNameChange(e)}
								/>
							) : (
								<TextField
									id="Name"
									label="Name"
									variant="outlined"
									fullWidth={true}
									color="secondary"
									onChange={(e) => handleNameChange(e)}
								/>
							)}
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
									onChange={(e) => handleEmailChange(e)}
								/>
							) : (
								<TextField
									id="Email"
									label="Email Address"
									variant="outlined"
									fullWidth={true}
									color="secondary"
									onChange={(e) => handleEmailChange(e)}
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
									onChange={(e) => handlePasswordChange(e)}
								/>
							) : (
								<TextField
									id="Password"
									label="Password"
									variant="outlined"
									fullWidth={true}
									color="secondary"
									type="password"
									onChange={(e) => handlePasswordChange(e)}
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
				{signUpErr ? (
					<Grid item container justify="center" alignItems="center">
						<FormHelperText
							error
							children="Could not sign user up"
							className={classes.signUpErrText}
						></FormHelperText>
					</Grid>
				) : null}
				<Grid container justify="center" alignItems="center" item>
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
			</div>
		);
	};

	const page2 = () => {
		return (
			<div>
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
									<p className={classes.locationText}>Bali</p>
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
							onClick={() => props.exit()}
							className={classes.signUpButton}
						>
							Sign Up
						</Button>
					</Grid>
				</Grid>
			</div>
		);
	};

	const handleExit = () => {};

	const handleNameChange = (e) => {
		setNameError(false);
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
		if (name === "") {
			setNameError(true);
			return;
		}

		if (!validateEmail(email)) {
			setEmailValidationError(true);
			return;
		}
		if (password.length <= 6) {
			setPasswordLengthError(true);
			return;
		}
		if (password !== confirmPassword) {
			setPasswordMatchError(true);
			return;
		}
		const userData = {
			name: name,
			email: email,
			password: password,
		};

		const sendSignUpRequest = async () => {
			try {
				const resp = await axios.post("/signup", userData);

				setPage2(true);
			} catch (err) {
				setSignUpErr(true);
				return;
			}
		};
		sendSignUpRequest();
	};

	return (
		<div className={classes.container}>
			<Paper elevation={3} className={classes.paper}>
				<CloseModal cb={props.exit} modalContainer={true}></CloseModal>
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
						{page ? page2() : page1()}
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
