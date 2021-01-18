import React, { useState, useEffect } from "react";
import { fetchCart, useProducts, fetchCheckoutToken } from "./utils/Commerce";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { StateContext } from "./utils/Context";
import Products from "./views/Products";
import TopBar from "./views/TopBar";
import CartDrawer from "./views/CartDrawer";
import Checkout from "./views/Checkout";
// import Footer from "./views/Footer";
import Dashboard from "./views/Dashboard";

function App() {
  const [currentCart, setCurrentCart] = useState({});
  const [checkoutToken, setCheckoutToken] = useState();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const products = useProducts();

  const updateCart = async () => {
    const cart = await fetchCart();
    setCurrentCart(cart);
  };

  const updateCheckoutToken = async () => {
    if (!currentCart.total_items === 0) {
      const token = await fetchCheckoutToken();
      setCheckoutToken(token);
    }
  };

  useEffect(() => {
    updateCart();
    updateCheckoutToken(currentCart);
  }, []);

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
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/checkout" component={Checkout} />
        </Switch>
        {/* <Footer/> */}
      </Router>
    </StateContext.Provider>
  );
}

export default App;
