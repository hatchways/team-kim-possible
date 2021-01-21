import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import SearchPage from "./pages/SearchPage";
import { MuiThemeProvider } from "@material-ui/core";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { theme } from "./themes/theme";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import ProtectedRoute from "./components/ProtectedRoute";
import Explore from "./components/Explore";
import { ShoppingCartProvider } from "./components/ShoppingCartContext";

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
				<ShoppingCartProvider>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<SearchPage />
							{loggedIn ? null : (
								<SignIn exit={handleModalExit} />
							)}
						</Route>
						<Route exact path="/signup">
							{loggedIn ? (
								<Redirect to="/" />
							) : (
								<SignUp exit={handleModalExit} />
							)}
						</Route>
						<Route exact path="/signin">
							{loggedIn ? (
								<Redirect to="/" />
							) : (
								<SignIn exit={handleModalExit} />
							)}
						</Route>
						<ProtectedRoute
							component={Explore}
							to="/explore"
							exact
						/>
					</Switch>
				</ShoppingCartProvider>
			</MuiThemeProvider>
		</BrowserRouter>
	);
}

export default App;
