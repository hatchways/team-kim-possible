import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = (props) => {
	// useEffect = () => {
	// 	const fetchCart = async () => {
	// 		try {
	// 			await axios.get("/shopping-cart/get-cart");
	// 		} catch (e) {
	// 			console.log(e);
	// 		}
	// 	};

	// 	fetchCart();
	// };
	const exampleCart = [
		{
			name: "Audi",
			price: 99,
		},
		{
			name: "Marriott",
			price: 50,
		},
	];

	const [shoppingCart, setShoppingCart] = useState(exampleCart);

	return (
		<ShoppingCartContext.Provider value={[shoppingCart, setShoppingCart]}>
			{props.children}
		</ShoppingCartContext.Provider>
	);
};
