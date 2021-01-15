import React from "react";
import { Grid } from "@material-ui/core";
import { useTheme, makeStyles } from "@material-ui/core/styles";

const headerStyles = makeStyles((theme) => ({
	title: {
		padding: "1rem 1rem 0rem 1rem",
		marginTop: "2rem",
		marginBottom: "0.5rem",
	},
	subTitle: {
		color: `${theme.palette.primary.light}`,
		fontSize: "13px",
		textAlign: "center",
	},
}));

function SignInModalHeader(props) {
	const theme = useTheme();
	const classes = headerStyles(theme);

	return (
		<Grid
			container
			item
			xs={12}
			justify="center"
			alignItems="center"
			direction="column"
		>
			<Grid item>
				<h1 className={classes.title}>{props.title}</h1>
			</Grid>

			<Grid item xs={7} className={classes.subTitle}>
				<p>{props.subTitle}</p>
			</Grid>
		</Grid>
	);
}

export default SignInModalHeader;
