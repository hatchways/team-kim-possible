import React, { useContext } from "react";
import { ShoppingCartContext } from "./ShoppingCartContext";
import { Typography, Grid } from "@material-ui/core";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { deleteFromShoppingCart } from "../utils/shoppingCart";
import DeleteIcon from "@material-ui/icons/Delete";

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
	deleteButton: {
		maxWidth: "9px",
		padding: "0px",
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

	const totalCartText = () => {
		return (
			<>
				<Grid item>
					<Typography variant='h6'>Total: {""} </Typography>
				</Grid>
				<Grid item className={classes.totalLeftSpacing}>
					<Typography variant='h6'>
						${prices.reduce((total, amount) => total + amount)}
					</Typography>
				</Grid>
			</>
		);
	};

	const emptyCartText = () => {
		return <Typography variant='h6'> Empty Cart! </Typography>;
	};

	const checkOutCartText = () => {
		return (
			<Grid item className={classes.checkoutSpacing}>
				<Link to='/checkout'>
					<Typography variant='body2'>Click Here For Checkout</Typography>
				</Link>
			</Grid>
		);
	};

	const handleDeleteFromShoppingCart = (e, item) => {
		deleteFromShoppingCart(shoppingCart, setShoppingCart, item);
	};

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
					direction='row'
					item
					className={classes.cartItemContainer}>
					<Grid item>
						<Typography variant='h6'>{item.name}</Typography>
					</Grid>

					<Grid item>
						<Typography variant='body1' className={classes.itemPrice}>
							${item.price}
						</Typography>

						<DeleteIcon
							onClick={(e) => handleDeleteFromShoppingCart(e, item)}
						/>
					</Grid>
				</Grid>
			))}

			<Grid item justify='center' container className={classes.totalTopSpacing}>
				{prices.length > 0 ? totalCartText() : emptyCartText()}
			</Grid>
			{prices.length > 0 ? checkOutCartText() : null}
		</Grid>
	);
}

export default ShoppingCartPopoverContent;
