import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core";
import { theme } from "./themes/theme";
import CarRentalPage from "./pages/CarRentalPage";
import Navbar from "./components/Navbar";
import SearchPage from "./pages/SearchPage";

import "./App.css";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Route path="/search" component={SearchPage} />
        <Route path="/carrental" component={CarRentalPage} />
        <Route exact path="/" component={Navbar} />
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
