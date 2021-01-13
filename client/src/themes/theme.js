import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
	overrides: {
		MuiFilledInput: {
			text: {
				color: "red",
			},
		},
	},

	typography: {
		button: {
			textTransform: "none",
		},
		fontFamily: '"Roboto"',
		fontSize: 12,
		h1: {
			// could customize the h1 variant as well
		},
	},
	palette: {
		primary: { main: "#ffa000" },
		secondary: { main: "#9a9aff", dark: "#333" },
	},
});
