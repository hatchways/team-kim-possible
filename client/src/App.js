import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core";
import { theme } from "./themes/theme";
import CarRentalPage from "./pages/CarRentalPage";
import Navbar from "./components/Navbar";
import UserPage from "./components/Userpage";
import SearchPage from "./pages/SearchPage";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import ProtectedRoute from "./components/ProtectedRoute";
import Explore from "./components/Explore";
import { ShoppingCartProvider } from "./components/ShoppingCartContext";
import HotelsPage from "./pages/HotelsPage";
import CarRental from "./pages/CarRentalPage";

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
        <Navbar />
        <Switch>
          <Route exact path="/" component={SearchPage} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/explorepage" component={Explore} />
          <Route exact path="/userpage" component={UserPage} />
          <Route exact path="/hotels" component={HotelsPage} />
          <Route exact path="/cars" component={CarRental} />
        </Switch>
      </MuiThemeProvider>
    </BrowserRouter>
  );
}

export default App;
