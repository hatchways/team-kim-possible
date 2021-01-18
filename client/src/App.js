import React, { useState } from "react";
import SearchPage from "./pages/SearchPage";
import { MuiThemeProvider } from "@material-ui/core";
import { BrowserRouter, Route } from "react-router-dom";
import { theme } from "./themes/theme";
import SignUp from "./components/SignUp";

function App() {
	const [signUpActive, setSignUpState] = useState(true);

	const handleSignUpExit = () => {
		setSignUpState(false);
	};
	return (
		<BrowserRouter>
			<MuiThemeProvider theme={theme}>
				<Route exact path="/" component={SearchPage} />
				{signUpActive ? (
					<SignUp exit={handleSignUpExit}></SignUp>
				) : null}

				{/* <Route path="/search" component={SearchPage} /> */}
			</MuiThemeProvider>
		</BrowserRouter>
	);
}

export default App;
