import React, { Component, useContext, useState, useReducer } from "react";
import Products from "./views/Products";
import { useProducts } from "./utils/Commerce";
import Cart from "./components/Cart";
import AppBar from "./views/AppBar";
import { StateContext } from "./Context";

class Store extends Component {
  state = { update: false, forceUpdate: this.forceUpdate };

  forceUpdate() {
    this.setState({
      update: !this.state.update,
    });
    console.log("state updated");
  }

  render() {
    return (
      <div>
        <AppBar />
        <Products />
        <Cart />
        <button onClick={this.forceUpdate.bind(this)}>Force update</button>
      </div>
    );
  }
}

export default Store;
