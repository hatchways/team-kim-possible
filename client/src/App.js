import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core";
import { theme } from "./themes/theme";
import Navbar from "./components/Navbar";
import UserPage from "./components/Userpage";
import SearchPage from "./pages/SearchPage";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import ProtectedRoute from "./components/ProtectedRoute";
import Explore from "./components/Explore";

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
        <Switch>
          <Route exact path="/">
            <Navbar />
            <UserPage />
            {/* <SearchPage /> */}
            {loggedIn ? null : <SignIn exit={handleModalExit} />}
          </Route>
          <Route exact path="/signup">
            {loggedIn ? <Redirect to="/" /> : <SignUp exit={handleModalExit} />}
          </Route>
          <Route exact path="/signin">
            {loggedIn ? <Redirect to="/" /> : <SignIn exit={handleModalExit} />}
          </Route>
          <ProtectedRoute component={Explore} to="/explore" exact />
          <ProtectedRoute component={UserPage} to="/userpage" exact />
        </Switch>
      </MuiThemeProvider>
    </BrowserRouter>
  );
}

export default App;
