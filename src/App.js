import React, { useState, useEffect } from "react";
import { fetchCart, useProducts, fetchCheckoutToken } from "./utils/Commerce";
import { StateContext } from "./utils/Context";
import Products from "./views/Products";
import AppBar from "./views/AppBar";
import CartDrawer from "./views/CartDrawer";
import Checkout from "./views/Checkout";

function App() {
  const [currentCart, setCurrentCart] = useState({});
  const [checkoutToken, setCheckoutToken] = useState();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const products = useProducts();

  useEffect(() => {
    updateCart();
    updateCheckoutToken();
  }, []);

  const updateCart = async () => {
    const cart = await fetchCart();
    setCurrentCart(cart);
  };
  const updateCheckoutToken = async () => {
    const token = await fetchCheckoutToken();
    setCheckoutToken(token);
  };

  const state = {
    currentCart,
    products,
    updateCart,
    isDrawerOpen,
    setIsDrawerOpen,
    checkoutToken,
  };

  return (
    <StateContext.Provider value={state}>
      <AppBar />
      <Products />
      <CartDrawer />
      <Checkout />
    </StateContext.Provider>
  );
}

export default App;
