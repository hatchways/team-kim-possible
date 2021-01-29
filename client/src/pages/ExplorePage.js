import React, { useState, useEffect } from "react";
import axios from "axios";
import Explore from "../components/Explore";

const ExplorePage = () => {
  const [state, setState] = useState({
    favorites: [],
    allLocations: [],
  });

  useEffect(() => {
    const getFavorites = async () => {
      const response = await axios.get("/explore");
      const favoriteData = await axios.get("/favorites/getAllFavorites");
      const favoritesArray = favoriteData.data;
      if (favoritesArray.length > 0) {
        const filteredLocations = response.data.locations.filter(
          (location) =>
            favoritesArray.findIndex((fav) => fav.id === location.id) < 0
        );
        return setState({
          favorites: favoritesArray,
          allLocations: filteredLocations,
        });
      }

      setState((state) => ({
        favorites: favoritesArray,
        allLocations: response.data.locations,
      }));
    };
    getFavorites();
  }, []);
  return <Explore state={state} />;
};

export default ExplorePage;
