import React from "react";
import { Paper } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { useTheme } from "@material-ui/core/styles";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";

function SignUpPage2() {
	const theme = useTheme();

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

	const handleFormSubmit = (e) => {
		e.preventDefault();
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
							backgroundColor: theme.palette.primary.light,
							transform: " rotate(45deg)",
							zIndex: "1",
						}}
					>
						<div
							style={{
								height: "20px",
								width: "2px",
								backgroundColor: theme.palette.primary.light,
								transform: " rotate(90deg)",
								zIndex: "2",
							}}
						></div>
					</div>
				</div>

				<Box
					mx={12}
					py={4}
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Box
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							flexDirection: "column",
							width: "100%",
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
									color: theme.palette.primary.light,
									fontSize: "13px",
								}}
							>
								Please select your favorite travel destinations
							</p>
						</Box>
						<form
							style={{ width: "100%" }}
							onSubmit={handleFormSubmit}
						>
							<Box mt={4.5}>
								<Paper
									elevation={0}
									style={{
										display: "flex",
										alignItems: "center",
										position: "relative",
									}}
									variant="outlined"
								>
									<RoomOutlinedIcon
										style={{
											color: theme.palette.secondary.main,
											margin: "14px 0px 14px 12px",
										}}
									></RoomOutlinedIcon>
									<p
										style={{
											margin: "10px 0px 10px 6px",
											fontWeight: "bold",
											fontSize: "14px",
										}}
									>
										Paris
									</p>
									<Box
										style={{
											display: "flex",
											justifyContent: "flex-end",
											alignItems: "center",
											width: "100%",

											position: "absolute",
											height: "100%",
										}}
									>
										<div
											style={{
												height: "13px",
												width: "2px",
												marginLeft: "12px",
												marginRight: "16px",
												backgroundColor:
													theme.palette.primary.light,
												transform: " rotate(45deg)",
												zIndex: "1",
											}}
										>
											<div
												style={{
													height: "13px",
													width: "2px",
													backgroundColor:
														theme.palette.primary
															.light,
													transform: "rotate(90deg)",
													zIndex: "2",
												}}
											></div>
										</div>
									</Box>
								</Paper>
								<Paper
									elevation={0}
									style={{
										display: "flex",
										marginTop: "16px",
										alignItems: "center",
										width: "100%",
										position: "relative",
									}}
									variant="outlined"
								>
									<RoomOutlinedIcon
										style={{
											color: theme.palette.secondary.main,
											margin: "14px 0px 14px 12px",
										}}
									></RoomOutlinedIcon>
									<p
										style={{
											margin: "10px 0px 10px 6px",
											fontWeight: "bold",
											fontSize: "14px",
										}}
									>
										Bali
									</p>
									<Box
										style={{
											display: "flex",
											justifyContent: "flex-end",
											alignItems: "center",
											width: "100%",

											position: "absolute",
											height: "100%",
										}}
									>
										<div
											style={{
												height: "13px",
												width: "2px",
												marginLeft: "12px",
												marginRight: "19px",
												backgroundColor:
													theme.palette.primary.light,
												transform: " rotate(45deg)",
												zIndex: "1",
											}}
										>
											<div
												style={{
													height: "13px",
													width: "2px",
													backgroundColor:
														theme.palette.primary
															.light,
													transform: "rotate(90deg)",
													zIndex: "2",
												}}
											></div>
										</div>
									</Box>
								</Paper>
							</Box>
							<Box
								style={{
									width: "100%",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<p
									style={{
										color: theme.palette.secondary.main,
										fontSize: "13px",
										marginTop: "16px",
									}}
								>
									Add More
								</p>
							</Box>
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
										fullWidth
										size="large"
										disableRipple={true}
										style={{
											color: "white",
											fontSize: "16px",
											borderRadius: "6px",
											marginBottom: "24px",
										}}
										type="submit"
									>
										<div
											style={{
												margin: "3px 6px 3px 6px",
											}}
										>
											Sign Up
										</div>
									</Button>
								</Box>
							</Box>
						</form>
					</Box>
				</Box>
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

export default SignUpPage2;
