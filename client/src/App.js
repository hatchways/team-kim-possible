import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import UserPage from "./components/Userpage";
import Navbar from "./components/Navbar";
import ExplorePage from "./components/Explore";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Navbar} />
      <Route path="/explorepage" component={ExplorePage} />
      <Route path="/userpage" exact component={UserPage} />

      {/* <UserPage /> */}
    </BrowserRouter>
  );
}

export default App;
