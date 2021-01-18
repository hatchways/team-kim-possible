import React from "react";
import LandingPage from "./pages/Landing.js";
import SearchPage from "./components/Search";
import { MuiThemeProvider } from "@material-ui/core";
import { BrowserRouter, Route } from "react-router-dom";
import { theme } from "./themes/theme";
function App() {
	return (
		<BrowserRouter>
			<MuiThemeProvider theme={theme}>
				<Route exact path="/" component={LandingPage} />
				<Route path="/search" component={SearchPage} />
			</MuiThemeProvider>
		</BrowserRouter>
	);
}

export default App;
