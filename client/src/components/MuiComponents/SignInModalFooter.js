import React from "react";
import { Grid } from "@material-ui/core";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const footerStyles = makeStyles((theme) => ({
	footer: {
		border: "1px solid #e2e2ea",
		marginTop: "3rem",
		padding: "2rem 3rem 2rem 3rem",
	},
	footerText: {
		color: `${theme.palette.primary.light}`,
	},
	secondary: {
		color: `${theme.palette.secondary.main}`,
	},
}));

function SignInModalBottom(props) {
	const theme = useTheme();
	const classes = footerStyles(theme);

	return (
		<Grid
			container
			item
			xs={12}
			className={classes.footer}
			justify="center"
			alignItems="center"
		>
			<Grid item>
				<span className={classes.footerText}>{props.primaryText} </span>
				<span className={classes.secondary}>
					<Link to={props.link}>{props.secondaryText}</Link>
				</span>
			</Grid>
		</Grid>
	);
}

export default SignInModalBottom;
