import React, { useState, useContext } from "react";
import { ShoppingCartContext } from "./ShoppingCartContext";
import { Grid, Button } from "@material-ui/core";
import { addToShoppingCart } from "../utils/shoppingCart";
function ShoppingCartTest() {
	const [shoppingCart, setShoppingCart] = useContext(ShoppingCartContext);
	let prices = [];

	for (let i = 0; i < shoppingCart.length; i++) {
		prices.push(shoppingCart[i].price);
	}

	const handleAddition = () => {
		addToShoppingCart(shoppingCart, setShoppingCart, {
			name: "item1",
			price: 5,
		});
	};

	return (
		<div>
			<Grid container justify='center'>
				<Grid item xs={6} justify='center' direction='column'>
					<Grid item container justify='center'>
						<h1>Change Shopping Cart</h1>
						<Grid item xs={12} container justify='center'>
							<Button variant='contained'>-</Button>
							Item 1 -- price $10
							<Button variant='contained' onClick={handleAddition}>
								+
							</Button>
						</Grid>
					</Grid>
				</Grid>
				<Grid container item xs={6} alignItems='center' direction='column'>
					<Grid item container direction='column'>
						<h1>Current Shopping Cart</h1>
						{shoppingCart.map((item) => (
							<div style={{ marginTop: "12px" }}>
								<p>item name: {item.name}</p>
								<p>item price: {item.price}</p>
							</div>
						))}
					</Grid>
				</Grid>
			</Grid>
			<Grid
				container
				alignItems='center'
				direction='column'
				style={{ marginTop: "16rem" }}>
				<h1>Total Price</h1>
				<h2>${prices.reduce((total, amount) => total + amount)}</h2>
			</Grid>
		</div>
	);
}

export default ShoppingCartTest;
