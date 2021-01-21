import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  typography: {
    fontFamily: '"Roboto"',
    fontSize: 12,
    h1: {
      // could customize the h1 variant as well
    },
  },
  palette: {
    primary: { main: "#DF1B1B" },
    secondary: {
      main: "#2196f3",
    },
  },
  buttonPrimary: {
    backgroundColor: "#ff9800",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "#f57c00",
    },
  },
});
