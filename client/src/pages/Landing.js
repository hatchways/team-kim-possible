import React from "react";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";

import { ThemeProvider } from "@material-ui/core/styles";

import { theme } from "../themes/theme";

const Landing = () => {
	return (
		<ThemeProvider theme={theme}>
			<SignIn></SignIn>
		</ThemeProvider>
	);
};

export default Landing;
