import React from "react";
<<<<<<< HEAD
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
=======
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./pages/Landing";
import SearchPage from "./pages/SearchPage";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={LandingPage} />
      <Route path="/search" component={SearchPage} />
    </BrowserRouter>
  );
>>>>>>> dev
}

export default App;
