import React, { useEffect, useState } from "react";
import Products from "./views/Products";
import commerce,{ fetchCart, useCart, useProducts } from "./utils/Commerce";
import Cart from "./components/Cart";
import AppBar from "./views/AppBar";

function App() {
  // const [currentProducts, setCurrentProducts] = useState([]);
  const [currentCart, setCurrentCart] = useState({});

  async function fetchCart() {
    try {
      const cart = await commerce.cart.retrieve();
      setCurrentCart(cart);
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    fetchCart();
  }, []);

  const currentProducts = useProducts();

  return (
    <div>
      {currentCart && <AppBar counter={currentCart.total_items} />}
      {currentProducts && (
        <Products products={currentProducts} fetchCart={fetchCart} />
      )}
      {currentCart && <Cart cart={currentCart} />}
    </div>
  );
}

export default App;
