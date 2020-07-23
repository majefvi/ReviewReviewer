import React, { Component } from "react";
import { AppBar, Typography, IconButton, Toolbar } from "@material-ui/core";
import MyLogo from "../logo.svg";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <AppBar position="static" style={{ backgroundColor: "#8ea1e1" }}>
        <Toolbar>
          <IconButton edge="start" href="#">
            <img src={MyLogo} alt="Product" height={50} width={50} />
          </IconButton>
          <Typography variant="h4">ReviewReviewer</Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default NavBar;
