import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import commerce from "../utils/Commerce";

function Cart() {
  const [cart, setCart] = useState({});

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();
    setCart(cart);
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div>
      <Button onClick={() => console.log(cart)}>cart</Button>
    </div>
  );
}

export default Cart;
