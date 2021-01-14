import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Avatar from "./Avatar";
import "./navbar.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "#6495ED",
  },
  navbar: {
    backgroundColor: "#fff",
    color: "black",
    boxShadow: "0 4px 4px rgba(0, 0, 0, 0.1)",
  },
  links: {
    color: "black",
    ":hover": {
      color: "#white",
    },
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Travel Booking
          </Typography>
          <Button id="links">Explore</Button>
          <Button id="links">Flights</Button>
          <Button id="links">Hotels</Button>
          <Button id="links">Cars</Button>
          <Avatar />
        </Toolbar>
      </AppBar>
    </div>
  );
}
