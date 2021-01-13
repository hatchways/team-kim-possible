import React from "react";
import SignUp from "../components/SignUp";

import { ThemeProvider } from "@material-ui/core/styles";

import { theme } from "../themes/theme";

const Landing = () => {
	return (
		<ThemeProvider theme={theme}>
			<SignUp></SignUp>
		</ThemeProvider>
	);
};

export default Landing;
