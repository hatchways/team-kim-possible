import React, { useEffect, useState } from "react";
import SearchPage from "./pages/SearchPage";
import { MuiThemeProvider } from "@material-ui/core";
import { BrowserRouter, Route } from "react-router-dom";
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
				<Route path="/" component={SearchPage} />
				<Route path="/">
					{loggedIn ? null : <SignIn exit={handleModalExit}></SignIn>}
				</Route>
				<Route exact path="/signup">
					{loggedIn ? (
						<div>already logged in</div>
					) : (
						<SignUp exit={handleModalExit}></SignUp>
					)}
				</Route>
				<Route exact path="/signin">
					{loggedIn ? (
						<div>already logged in</div>
					) : (
						<SignIn exit={handleModalExit}></SignIn>
					)}
				</Route>

				<ProtectedRoute
					component={<Explore></Explore>}
					route="/explore"
				></ProtectedRoute>
			</MuiThemeProvider>
		</BrowserRouter>
	);
}

export default App;
