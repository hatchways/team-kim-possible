import axios from "axios";

export const addToShoppingCart = (currentCart, setCart, selectedObj) => {
	setCart((prevShoppingCart) => [...prevShoppingCart, selectedObj]);
	return;
};

export const deleteFromShoppingCart = (currentCart, setCart, selectedObj) => {
	//make call to backend to delete

	return true;
};
