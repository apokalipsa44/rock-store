import React, { useEffect, useState } from "react";
import Products from "./views/Products";
import commerce,{ fetchCart, useCart, useProducts } from "./utils/Commerce";
import Cart from "./components/Cart";
import AppBar from "./views/AppBar";
import {StateContext} from './Context'

function App() {
  // const [currentProducts, setCurrentProducts] = useState([]);
  const [currentCart, setCurrentCart] = useState({});

  

  useEffect(() => {
    (async function fetchCart() {
    try {
      const cart = await commerce.cart.retrieve();
      setCurrentCart(cart);
    } catch (error) {
      console.log("error", error);
    }
  })()
    
  }, []);

  

  const currentProducts = useProducts();

  return (
    <StateContext.Provider value={currentCart}>
      {currentCart && <AppBar counter={currentCart.total_items} />}
      {currentProducts && (
        <Products products={currentProducts} setCurrentCart={setCurrentCart} />
      )}
      {currentCart && <Cart cart={currentCart} />}
    </StateContext.Provider>
  );
}

export default App;
