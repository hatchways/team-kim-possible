import React, { useEffect, useState } from "react";
import SearchPage from "./pages/SearchPage";
import { MuiThemeProvider } from "@material-ui/core";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { theme } from "./themes/theme";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import ProtectedRoute from "./components/ProtectedRoute";
import Explore from "./components/Explore";

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
				<Route path="/">
					<SearchPage></SearchPage>
					{loggedIn ? null : <SignIn exit={handleModalExit}></SignIn>}
				</Route>

				<Route path="/signup">
					{loggedIn ? (
						<Redirect to="/"></Redirect>
					) : (
						<SignUp exit={handleModalExit}></SignUp>
					)}
				</Route>

				<Route path="/signin">
					{loggedIn ? (
						<Redirect to="/"></Redirect>
					) : (
						<SignIn exit={handleModalExit}></SignIn>
					)}
				</Route>

				<ProtectedRoute
					component={<Explore></Explore>}
					to="/explore"
				></ProtectedRoute>
			</MuiThemeProvider>
		</BrowserRouter>
	);
}

export default App;
