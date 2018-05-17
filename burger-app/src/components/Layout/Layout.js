import React, { Component } from "react";
import Aux from "../../hoc/Auxillary";
import classes from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    isBackdropShown: true
  }

  hideBackdropHandler = () => {
    this.setState({
      isBackdropShown: false
    });
  }

  render() {
    return (
      <Aux>
        <Toolbar />
        <SideDrawer show={this.state.isBackdropShown} clicked={this.hideBackdropHandler}/>
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
