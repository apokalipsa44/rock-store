import { Button } from "@material-ui/core";
import React, { useContext } from "react";
import CartItems from "./CartItems";
import {StateContext}  from "../utils/Context";

function Cart() {
  const { currentCart } = useContext(StateContext);
  return (
    <div>
      <CartItems items={currentCart.line_items} />
      <Button onClick={() => console.log(currentCart)}>cart</Button>
    </div>
  );
}

export default Cart;
