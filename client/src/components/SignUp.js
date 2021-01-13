import React, { useState } from "react";
import { FormControl, Paper, TextField } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { useTheme } from "@material-ui/core/styles";

function SignUp() {
	const theme = useTheme();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [passwordMatchError, setPasswordMatchError] = useState(false);
	const [passwordLengthError, setPasswordLengthError] = useState(false);

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

	const handleNameChange = (e) => {
		setName(e.target.value);
	};

	const handleEmailChange = (e) => {
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
		if (password.length <= 6) {
			setPasswordLengthError(true);
			return;
		}
		if (password !== confirmPassword) {
			setPasswordMatchError(true);
		}
	};

	return (
		<div style={container}>
			<Paper elevation={3} style={{ position: "relative" }}>
				<div
					style={{
						position: "absolute",

						left: "91%",
						top: "2%",
						height: "20px",
						width: "20px",
						textAlign: "center",
					}}
					onClick={() => handleExit()}
				>
					<div
						style={{
							height: "20px",
							width: "2px",
							marginLeft: "12px",
							backgroundColor: `${theme.palette.primary.light}`,
							transform: " rotate(45deg)",
							zIndex: "1",
						}}
					>
						<div
							style={{
								height: "20px",
								width: "2px",
								backgroundColor: `${theme.palette.primary.light}`,
								transform: " rotate(90deg)",
								zIndex: "2",
							}}
						></div>
					</div>
				</div>

				<Box px={8} py={4}>
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							flexDirection: "column",
						}}
					>
						<Box
							width="75%"
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								flexDirection: "column",
								textAlign: "center",
							}}
						>
							<h1>Sign Up</h1>

							<p
								style={{
									color: `${theme.palette.primary.light}`,
									fontSize: "13px",
								}}
							>
								Track Prices, organize travel plans and access
								member-only deals
							</p>
						</Box>
						<form
							style={{ width: "100%" }}
							onSubmit={handleFormSubmit}
						>
							<FormControl style={{ width: "100%" }}>
								{/* Name */}

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

								{/* Email */}
								<Box mt={2}>
									<TextField
										id="Email"
										label="Email Address"
										variant="outlined"
										fullWidth={true}
										color="secondary"
										onChange={(e) => handleEmailChange(e)}
									/>
								</Box>

								{/* PASSWORD */}
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

								{/* CONFIRM PASSWORD */}

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

								{/* SUBMIT BUTTON */}

								<Box
									mt={6}
									style={{
										width: "100%",
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}
								>
									<Box style={{ width: "45%" }}>
										<Button
											color={"primary"}
											variant="contained"
											fullWidth={true}
											size="large"
											disableRipple={true}
											style={{
												color: "white",
												fontSize: "15px",
												borderRadius: "6px",
											}}
											type="submit"
										>
											<div
												style={{
													margin: "3px 6px 3px 6px",
												}}
											>
												Continue
											</div>
										</Button>
									</Box>
								</Box>
							</FormControl>
						</form>
					</div>
				</Box>

				{/* FOOTER */}

				<div
					style={{
						width: "100%",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						borderTop: "1px solid #e2e2ea",
						fontSize: "15px",
						color: `${theme.palette.primary.light}`,
					}}
				>
					<p style={{ margin: "36px" }}>
						Already have an account?{" "}
						<span style={{ color: theme.palette.secondary.main }}>
							Sign In
						</span>
					</p>
				</div>
			</Paper>
		</div>
	);
}

export default SignUp;
