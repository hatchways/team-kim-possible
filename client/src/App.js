import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Userpage from "./components/Userpage";
import Navbar from "./components/Navbar";
import SearchPage from "./pages/SearchPage";

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
