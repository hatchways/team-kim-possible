import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./pages/Landing";
import Navbar from "./components/Navbar";
import SearchPage from "./pages/SearchPage";

import "./App.css";

function App() {
  return (

    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Route path="/" component={Navbar} />
        <p> A lot of cool stuff</p>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
