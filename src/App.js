import React, { useState, useEffect } from "react";
import { fetchCart, useProducts } from "./utils/Commerce";
import { StateContext } from "./utils/Context";
import Products from "./views/Products";
import AppBar from "./views/AppBar";
import CartDrawer from "./views/CartDrawer";

function App() {
  const [currentCart, setCurrentCart] = useState({});
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
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
    isDrawerOpen,
    setIsDrawerOpen
  };

  return (
    <StateContext.Provider value={state}>
      <AppBar />
      <Products />
      <CartDrawer />
    </StateContext.Provider>
  );
}

export default App;
