import React, { useEffect, useState } from "react";
import SearchPage from "./pages/SearchPage";
import { MuiThemeProvider } from "@material-ui/core";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { theme } from "./themes/theme";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import ProtectedRoute from "./components/ProtectedRoute";
import Explore from "./components/Explore";
import Hotels from "./components/Hotels";

function App() {
	const [loggedIn, setLoggedIn] = useState(false);

	useEffect(() => {
		checkLoggedIn();
	});

	const checkLoggedIn = () => {
		if (localStorage.loggedIn) {
			return setLoggedIn(true);
		} else {
			return setLoggedIn(false);
		}
	};

	const handleModalExit = () => {
		setLoggedIn(true);
	};

	return (
		<BrowserRouter>
			<MuiThemeProvider theme={theme}>
				<Switch>
					<Route exact path="/">
						<SearchPage></SearchPage>
						{loggedIn ? null : (
							<SignIn exit={handleModalExit}></SignIn>
						)}
					</Route>
					<Route exact path="/signup">
						{loggedIn ? (
							<Redirect to="/"></Redirect>
						) : (
							<SignUp exit={handleModalExit}></SignUp>
						)}
					</Route>

					<Route exact path="/signin">
						{loggedIn ? (
							<Redirect to="/"></Redirect>
						) : (
							<SignIn exit={handleModalExit}></SignIn>
						)}
					</Route>

					<ProtectedRoute
						component={Explore}
						to="/explore"
						exact
					></ProtectedRoute>
				</Switch>
			</MuiThemeProvider>
		</BrowserRouter>
	);
}

export default App;
