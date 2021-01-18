import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { fetchCart, useProducts, fetchCheckoutToken } from "./utils/Commerce";
import { StateContext } from "./utils/Context";
import Products from "./views/Products";
import TopBar from "./views/TopBar";
import CartDrawer from "./views/CartDrawer";
import Checkout from "./views/Checkout";
// import Footer from "./views/Footer";
import Dashboard from "./views/Dashboard";

function App() {
  const [currentCart, setCurrentCart] = useState({});
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const products = useProducts();
  const [checkoutToken, setCheckoutToken] = useState({})
  
  const updateCart = async () => {
    const cart = await fetchCart();
    setCurrentCart(cart);
  };

  const updateCheckoutToken=async()=>{
    const token = await fetchCheckoutToken()
    setCheckoutToken(token)
  }
  
  useEffect(() => {
    updateCart();
    updateCheckoutToken()
  }, []);
  
 

  const state = {
    currentCart,
    products,
    updateCart,
    isDrawerOpen,
    setIsDrawerOpen,
    checkoutToken,
    updateCheckoutToken
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
