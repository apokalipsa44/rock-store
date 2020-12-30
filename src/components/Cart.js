import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import CartItems from "./CartItems";

function Cart( {cart}) {
  

  return (
    <div>
      <CartItems items={cart.line_items}/>
      <Button onClick={() => console.log(cart)}>cart</Button>
    </div>
  );
}

export default Cart;
