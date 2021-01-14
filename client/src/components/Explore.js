import React from "react";
import { Grid } from "@material-ui/core";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import ExploreCard from "./ExploreCard";

const exploreStyles = makeStyles((theme) => ({
	pageContainer: {
		overflow: "hidden",
		marginBottom: "3rem",
	},
	pt4: {
		paddingTop: "3rem",
	},

	title: {
		fontSize: "3rem",
	},
	subTitle: {
		color: `${theme.palette.primary.light}`,
		marginTop: "-0.25rem",
		fontSize: "19px",
	},
	cardContainer: {
		padding: "3rem 9rem 0rem 9rem",
	},
}));

function Explore() {
	const theme = useTheme();
	const classes = exploreStyles(theme);

	return (
		<Grid
			container
			justify="center"
			alignItems="center"
			direction="row"
			className={classes.pageContainer}
		>
			<Grid
				container
				item
				xs={12}
				justify="center"
				alignItems="center"
				className={classes.pt4}
			>
				<Grid item>
					<h1 className={classes.title}>Explore destinations</h1>
				</Grid>
			</Grid>
			<Grid item>
				<p className={classes.subTitle}>
					World's Top Destinations to Explore
				</p>
			</Grid>
			<Grid
				container
				item
				justify="center"
				alignItems="center"
				spacing={6}
				className={classes.cardContainer}
			>
				<Grid item xs={6} md={3}>
					<ExploreCard
						location="Cancun"
						country="Mexico"
					></ExploreCard>
				</Grid>
				<Grid item xs={6} md={3}>
					<ExploreCard
						location="Cancun"
						country="Mexico"
					></ExploreCard>
				</Grid>
				<Grid item xs={6} md={3}>
					<ExploreCard
						location="Cancun"
						country="Mexico"
					></ExploreCard>
				</Grid>
				<Grid item xs={6} md={3}>
					<ExploreCard location="Oslo" country="Norway"></ExploreCard>
				</Grid>
				<Grid item xs={6} md={3}>
					<ExploreCard location="Oslo" country="Norway"></ExploreCard>
				</Grid>
				<Grid item xs={6} md={3}>
					<ExploreCard location="Oslo" country="Norway"></ExploreCard>
				</Grid>
				<Grid item xs={6} md={3}>
					<ExploreCard location="Oslo" country="Norway"></ExploreCard>
				</Grid>
				<Grid item xs={6} md={3}>
					<ExploreCard location="Oslo" country="Norway"></ExploreCard>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default Explore;
