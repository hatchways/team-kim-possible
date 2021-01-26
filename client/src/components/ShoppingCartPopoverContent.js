import React, { useContext } from "react";
import { ShoppingCartContext } from "./ShoppingCartContext";
import { Typography, Grid } from "@material-ui/core";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const shoppingCartStyles = makeStyles((theme) => ({
	container: {
		padding: "2rem",
	},
	cartItemContainer: {
		marginTop: "1.5rem",
	},
	itemPrice: {
		fontStyle: "italic",
	},
	totalTopSpacing: {
		marginTop: "2rem",
	},
	totalLeftSpacing: {
		marginLeft: "0.5rem",
	},
	checkoutSpacing: {
		marginTop: "1rem",
	},
}));

function ShoppingCartPopoverContent() {
	const [shoppingCart, setShoppingCart] = useContext(ShoppingCartContext);
	const theme = useTheme();
	const classes = shoppingCartStyles(theme);

	let prices = [];

	for (let i = 0; i < shoppingCart.length; i++) {
		prices.push(shoppingCart[i].price);
	}

	return (
		<Grid
			container
			className={classes.container}
			direction='column'
			justify='center'
			alignItems='center'>
			<Grid item xs={12}>
				<Typography variant={"h4"}>Shopping Cart</Typography>
			</Grid>

			{shoppingCart.map((item) => (
				<Grid
					container
					justify='space-between'
					alignItems='center'
					item
					xs={12}
					className={classes.cartItemContainer}>
					<Typography variant='h6'>{item.name}</Typography>
					<Typography variant='body1' className={classes.itemPrice}>
						${item.price}
					</Typography>
				</Grid>
			))}

			<Grid item justify='center' container className={classes.totalTopSpacing}>
				<Grid item>
					<Typography variant='h6'>Total: {""} </Typography>
				</Grid>
				<Grid item className={classes.totalLeftSpacing}>
					<Typography variant='h6'>
						${prices.reduce((total, amount) => total + amount)}
					</Typography>
				</Grid>
			</Grid>
			<Grid item className={classes.checkoutSpacing}>
				<Link to='/checkout'>
					<Typography variant='body2'>Click Here For Checkout</Typography>
				</Link>
			</Grid>
		</Grid>
	);
}

export default ShoppingCartPopoverContent;
