import React from "react";
import { Grid } from "@material-ui/core";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import ExploreCard from "./ExploreCard";
import { Typography } from "@material-ui/core";

const exploreStyles = makeStyles((theme) => ({
	pageContainer: {
		overflow: "hidden",
		marginBottom: "3rem",
	},
	pt4: {
		paddingTop: "3rem",
	},

	cardContainer: {
		paddingTop: "2rem",
		paddingLeft: "10%",
		paddingRight: "10%",
	},

	headerSpacing: {
		margin: "2rem 0 4rem 0",
	},
}));

function Explore() {
	//To get image for exploreCard, make sure the image is saved in public with the name of the place. ex: "public/images/cancun.png"
	//THIS: props.location.toLowerCase() === saved image name
	const theme = useTheme();
	const classes = exploreStyles(theme);

	const locations = [
		{ location: "Cancun", country: "Mexico", imgName: "/cancun.png" },
		{ location: "London", country: "UK", imgName: "/london.png" },
		{ location: "Bali", country: "Indonesia", imgName: "bali.png" },
		{ location: "Oslo", country: "Norway", imgName: "oslo.png" },
		{ location: "Paris", country: "France", imgName: "paris.png" },
		{ location: "New York", country: "USA", imgName: "newyork.png" },
		{ location: "Miami", country: "USA", imgName: "miami.png" },
		{ location: "Rome", country: "Italy", imgName: "rome.png" },
	];

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
				<Grid
					item
					xs={12}
					container
					justify="center"
					alignItems="center"
				>
					<Typography variant="h2">Explore Destinations</Typography>
				</Grid>
			</Grid>
			<Grid item>
				<Typography variant="h5" className={classes.headerSpacing}>
					World's Top Destinations to Explore
				</Typography>
			</Grid>
			<Grid
				container
				item
				justify="center"
				alignItems="center"
				spacing={5}
				className={classes.cardContainer}
			>
				{locations.map((loc) => {
					return (
						<Grid item xs={12} lg={3}>
							<ExploreCard
								location={loc.location}
								country={loc.country}
								imgName={loc.imgName}
							></ExploreCard>
						</Grid>
					);
				})}
			</Grid>
		</Grid>
	);
}

export default Explore;
