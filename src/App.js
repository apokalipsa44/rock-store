import React, { useState, useEffect } from "react";
import { fetchCart, useProducts } from "./utils/Commerce";
import { StateContext } from "./utils/Context";
import Products from "./views/Products";
import Cart from "./components/Cart";
import AppBar from "./views/AppBar";

function App() {
  const [currentCart, setCurrentCart] = useState({});
  const products = useProducts();

  useEffect(() => {
    updateCart();
  }, []);

  const updateCart = async () => {
    const cart = await fetchCart();
    setCurrentCart(cart);
  };

  const state = {
    currentCart,
    products,
    updateCart,
  };

  return (
    <StateContext.Provider value={state}>
      <AppBar />
      <Products />
      <Cart />
    </StateContext.Provider>
  );
}

export default App;
