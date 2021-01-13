import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./pages/Landing";
import SearchPage from "./pages/SearchPage/index"

import "./App.css";

function App() {
  return (
      <BrowserRouter>
        <Route exact path="/" component={LandingPage} />
        <Route path='/search' component={SearchPage}/>
      </BrowserRouter>
  );
}

export default App;
