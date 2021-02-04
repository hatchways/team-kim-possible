import React, { useEffect, useState, useReducer } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core";
import { theme } from "./themes/theme";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./components/Navbar";
import UserPage from "./components/Userpage";
import SearchPage from "./pages/SearchPage";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import CarRental from "./pages/CarRentalPage";
import ProtectedRoute from "./components/ProtectedRoute";
import Explore from "./components/Explore";
import { ShoppingCartProvider } from "./components/ShoppingCartContext";
import HotelsPage from "./pages/HotelsPage";
import ExplorePage from "./pages/ExplorePage";
import { dataContext } from "./context";
import axios from "axios";

const appStyles = makeStyles((theme) => ({
  container: {
    position: "fixed",
    width: "100%",
    height: "100%",
    top: "0",
    right: "0",
    bottom: "0",
    margin: "auto",
    backgroundColor: "rgba(0,0,0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const INIT_STATE = {
  user: { name: "", email: "", home: "", favorites: [] },
  flights: [],
  hotels: [],
  cars: [],
  shoppingCart: [],
};
const reducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_USER":
      return { ...state, user: payload };
    default:
      return state;
  }
};

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const classes = appStyles(theme);
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  useEffect(() => {
    checkLoggedIn();
  });
  useEffect(() => {
    const getUser = async () => {
      const user = await axios.get("/profile");
      return user.data;
    };
    if (loggedIn) {
      getUser();
    }
  }, [loggedIn]);

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
    <dataContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          <ShoppingCartProvider>
            <Navbar />

            <Switch>
              <Route exact path="/">
                <SearchPage />
                {loggedIn ? null : (
                  <div className={classes.container}>
                    <SignIn exit={handleModalExit} />
                  </div>
                )}
              </Route>

              <Route exact path="/signup">
                {loggedIn ? (
                  <Redirect to="/explore" />
                ) : (
                  <>
                    <SearchPage />
                    <div className={classes.container}>
                      <SignUp exit={handleModalExit} />
                    </div>
                  </>
                )}
              </Route>
              <Route exact path="/signin">
                {loggedIn ? (
                  <Redirect to="/explore" />
                ) : (
                  <>
                    <SearchPage />
                    <div className={classes.container}>
                      <SignIn exit={handleModalExit} />
                    </div>
                  </>
                )}
              </Route>
              <ProtectedRoute exact path="/explore" component={ExplorePage} />
              <ProtectedRoute exact path="/userpage" component={UserPage} />

              <ProtectedRoute exact path="/carrental" component={CarRental} />

              <ProtectedRoute exact path="/hotels" component={HotelsPage} />
            </Switch>
          </ShoppingCartProvider>
        </MuiThemeProvider>
      </BrowserRouter>
    </dataContext.Provider>
  );
}

export default App;
