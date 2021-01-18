import React, { useState } from "react";
import SearchPage from "./pages/SearchPage";
import { MuiThemeProvider } from "@material-ui/core";
import { BrowserRouter, Route } from "react-router-dom";
import { theme } from "./themes/theme";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

function App() {
	const [signUpActive, setSignUpState] = useState(true);

	const handleModalExit = () => {
		setSignUpState(false);
	};
	return (
		<BrowserRouter>
			<MuiThemeProvider theme={theme}>
				<Route exact path="/" component={SearchPage} />
				{signUpActive ? <SignUp exit={handleModalExit}></SignUp> : null}
				{/* {signUpActive ? <SignIn exit={handleModalExit}></SignIn> : null} */}

				{/* <Route path="/search" component={SearchPage} /> */}
			</MuiThemeProvider>
		</BrowserRouter>
	);
}

export default App;
