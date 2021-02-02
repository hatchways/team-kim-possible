import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import {
  Button,
  Avatar,
  Drawer,
  Typography,
  IconButton,
  AppBar,
  Toolbar,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "#6464FF",
  },
  navTitle: {
    textDecoration: "none",
  },
  navbar: {
    backgroundColor: "#fff",
    color: "black",
    boxShadow: "0 4px 4px rgba(0, 0, 0, 0.1)",
    position: "relative",
  },
  links: {
    padding: "1rem",
    [theme.breakpoints.down("sm")]: {
      padding: "0",
    },
    color: `${theme.palette.secondary.main}`,
    "&:hover": {
      color: `${theme.palette.primary.main}`,
    },
  },
  textDecoration: {
    textDecorationLine: "none",
  },
  drawerItem: {
    textDecorationLine: "none",
    height: "100%",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [state, setState] = useState({
    mobile: false,
    drawerOpen: false,
  });
  const { mobile, drawerOpen } = state;

  useEffect(() => {
    const setView = () => {
      return window.innerWidth < 450
        ? setState((prev) => ({ ...prev, mobile: true }))
        : setState((prev) => ({ ...prev, mobile: false }));
    };
    setView();
    window.addEventListener("resize", () => setView());
  }, []);

  const openDrawer = () => setState((prev) => ({ ...prev, drawerOpen: true }));

  const closeDrawer = () =>
    setState((prev) => ({ ...prev, drawerOpen: false }));

  const drawerItems = (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{ textAlign: "center" }}
      spacing={3}
    >
      <Grid item xs={12}>
        <Link to="/" className={classes.drawerItem}></Link>
        <Typography className={classes.links}>
          <Link to="/" className={classes.drawerItem}>
            Travel Booking
          </Link>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Link to="explore" className={classes.drawerItem}>
          <Typography className={classes.links}>Explore</Typography>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Link to="/" className={classes.drawerItem}>
          <Typography className={classes.links}>Flights</Typography>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Link to="/hotels" className={classes.drawerItem}>
          <Typography className={classes.links}>Hotels</Typography>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Link to="/carrental" className={classes.drawerItem}>
          <Typography className={classes.links}>Cars</Typography>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Link to="/userpage" className={classes.drawerItem}>
          <Typography className={classes.links}>User</Typography>
        </Link>
      </Grid>
    </Grid>
  );

  const menu = (
    <AppBar position="static" className={classes.navbar} elevation={5}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <Link className={classes.navTitle} to="/">
            Travel Booking
          </Link>
        </Typography>
        <Link to="/explore" className={classes.textDecoration}>
          <Button className={classes.links}>
            <Typography variant="button">Explore</Typography>
          </Button>
        </Link>
        <Link to="/" className={classes.textDecoration}>
          <Button className={classes.links}>
            <Typography variant="button">Flights</Typography>
          </Button>
        </Link>
        <Link to="/hotels" className={classes.textDecoration}>
          <Button className={classes.links}>Hotels</Button>
        </Link>
        <Link to="/carrental" className={classes.textDecoration}>
          <Button className={classes.links}>Cars</Button>
        </Link>
        <Link to={"/userpage"}>
          <Avatar src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2ee38b4e-1ad8-433e-b83b-5f1492547b2d/d3a4k16-486f7e33-afd1-4d1d-a573-ff3d9ea74e8f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMmVlMzhiNGUtMWFkOC00MzNlLWI4M2ItNWYxNDkyNTQ3YjJkXC9kM2E0azE2LTQ4NmY3ZTMzLWFmZDEtNGQxZC1hNTczLWZmM2Q5ZWE3NGU4Zi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.g16PZQ0d4y8s6zV_SIhLryhy9X6UXCC0ZMN0mIW35Uk" />
        </Link>
      </Toolbar>
    </AppBar>
  );

  const menuMobile = (
    <AppBar position="static" className={classes.navbar} elevation={5}>
      <IconButton onClick={openDrawer}>
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={closeDrawer}
        className={classes.drawer}
      >
        {drawerItems}
      </Drawer>
    </AppBar>
  );
  return <div className={classes.root}>{mobile ? menuMobile : menu}</div>;
}
