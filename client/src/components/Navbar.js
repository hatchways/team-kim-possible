import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Popover } from "@material-ui/core";
import ShoppingCartPopoverContent from "./ShoppingCartPopoverContent";

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
    color: `${theme.palette.secondary.main}`,
    "&:hover": {
      color: `${theme.palette.primary.main}`,
    },
  },
  shoppingCartIcon: {
    padding: "1rem 1.5rem 1rem 1rem",
    color: `${theme.palette.secondary.main}`,
    "&:hover": {
      color: `${theme.palette.primary.main}`,
    },
  },
  textDecoration: {
    textDecorationLine: "none",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleCloseShoppingCart = () => {
    setAnchorEl(null);
  };

  const handleOpenShoppingCart = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.navbar} elevation={5}>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            <Link className={classes.navTitle} to='/'>
              Travel Booking
            </Link>
          </Typography>
          <Link to='/explore' className={classes.textDecoration}>
            <Button className={classes.links}>
              <Typography variant='button'>Explore</Typography>
            </Button>
          </Link>
          <Link to='/' className={classes.textDecoration}>
            <Button className={classes.links}>
              <Typography variant='button'>Flights</Typography>
            </Button>
          </Link>
          <Link to='/hotels' className={classes.textDecoration}>
            <Button className={classes.links}>Hotels</Button>
          </Link>
          <Link to='/carrental' className={classes.textDecoration}>
            <Button className={classes.links}>Cars</Button>
          </Link>

          <ShoppingCartOutlinedIcon
            className={classes.shoppingCartIcon}
            onClick={(e) => handleOpenShoppingCart(e)}
          />
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={(e) => handleCloseShoppingCart(e)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}>
            <ShoppingCartPopoverContent />
          </Popover>
          <Link to={"/userpage"}>
            <Avatar src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2ee38b4e-1ad8-433e-b83b-5f1492547b2d/d3a4k16-486f7e33-afd1-4d1d-a573-ff3d9ea74e8f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMmVlMzhiNGUtMWFkOC00MzNlLWI4M2ItNWYxNDkyNTQ3YjJkXC9kM2E0azE2LTQ4NmY3ZTMzLWFmZDEtNGQxZC1hNTczLWZmM2Q5ZWE3NGU4Zi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.g16PZQ0d4y8s6zV_SIhLryhy9X6UXCC0ZMN0mIW35Uk' />
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
