import React, { useState, createContext } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = (props) => {
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
