import React, { useState, useEffect } from "react";
import axios from "axios";
import Explore from "../components/Explore";

const ExplorePage = () => {
  const [favorites, setFavorites] = useState([]);
  const [allLocations, setAllLocations] = useState([]);
  useEffect(() => {
    const getFavorites = async () => {
      const favoriteData = await axios.get("/favorites/getAllFavorites");
      const favoriteArray = favoriteData.data;
      setFavorites((favorites) => [...favorites, ...favoriteArray]);
    };
    getFavorites();
  }, []);

  useEffect(() => {
    const getLocations = async () => {
      const response = await axios.get("/explore");
      if (favorites.length > 0) {
        const filteredLocations = response.data.locations.filter((location) =>
          favorites.find((fav) => location.id !== fav.id)
        );
        return setAllLocations((locations) => [
          ...locations,
          ...filteredLocations,
        ]);
      }
      setAllLocations(response.data.locations);
    };
    getLocations();
  }, [favorites]);
  console.log(favorites, allLocations);
  return <Explore favorites={favorites} allLocations={allLocations} />;
};

export default ExplorePage;
