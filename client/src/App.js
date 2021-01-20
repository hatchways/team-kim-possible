import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Userpage from "./components/Userpage";
import Navbar from "./components/Navbar";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

import "./App.css";

function App() {
  return (
    <MuiThemeProvider>
      <BrowserRouter>
        <Route path="/" component={Navbar} />
        <Userpage />
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
