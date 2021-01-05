import React, { useState, useEffect } from "react";
import { fetchCart, useCart, useProducts } from "./utils/Commerce";
import { StateContext } from "./Context";
import Store from "./Store";

function App() {
  const [currentCart, setCurrentCart] = useState({});
  const products = useProducts();
  const [updateCart, setUpdateCart] = useState(false);

  useEffect(() => {
    forceUpdateCart()
  }, []);

  const setCartUpdated = () => {
    setUpdateCart(true);
    console.log("context state updated");
  };
  const forceUpdateCart = async () => {
    if (true) {
      const cart = await fetchCart();
      setCurrentCart(cart);
    }

    console.log("currentCart from froceupdateCart", currentCart);
    console.log("updateCart nowy kart", updateCart);
  };

  const state = {
    currentCart,
    updateCart,
    products,
    setCartUpdated,
    forceUpdateCart,
  };

  return (
    <StateContext.Provider value={state}>
      <Store />
    </StateContext.Provider>
  );
}

export default App;
