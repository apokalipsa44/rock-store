import React, { useState, useEffect } from "react";
import { fetchCart, useProducts, fetchCheckoutToken } from "./utils/Commerce";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { StateContext } from "./utils/Context";
import Products from "./views/Products";
import TopBar from "./views/TopBar";
import CartDrawer from "./views/CartDrawer";
import Checkout from "./views/Checkout";
import Footer from "./views/Footer";

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
      <Router>
        <TopBar />
        <CartDrawer />
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
        <Footer/>
      </Router>
    </StateContext.Provider>
  );
}

export default App;
