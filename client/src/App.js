import React from "react";
import { MuiThemeProvider } from "@material-ui/core";
import { BrowserRouter, Route } from "react-router-dom";

import { theme } from "./themes/theme";
import LandingPage from "./pages/Landing";
import Navbar from "./components/Navbar";
import ExploreCard from "./components/ExploreCard";
import Userpage from "./components/Userpage";
import "./App.css";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Route path="/" component={Navbar} />
        <Userpage />
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
