import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import commerce from "../utils/Commerce";
import CartProductsItems from "./CartProductsItems";

function Cart() {
  const [cart, setCart] = useState([]);

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();
    setCart(cart);
    console.log("from cart" + cart);
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div>
      <CartProductsItems items={cart.line_items} />
      <Button onClick={() => console.log(cart)}>cart</Button>
    </div>
  );
}

export default Cart;
