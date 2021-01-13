import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
	overrides: {
		MuiInputLabel: {
			root: {
				fontWeight: "bolder",
				color: "black",
			},
		},
	},
	typography: {
		button: {
			textTransform: "none",
		},
		fontFamily: '"Roboto"',
		fontSize: 12,
	},
	palette: {
		primary: { main: "#ffa000", light: "#8C8F91" },
		secondary: { main: "#6464ff" },
	},
});
