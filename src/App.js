import React from "react";
import Products from "./views/Products";
import {useProducts, useCart} from "./utils/Commerce";
import { useState, useEffect } from "react";
import Cart from "./components/Cart";
import AppBar from "./views/AppBar";



function App() {
  // const [currentProducts, setCurrentProducts] = useState([]);
  // const [currentCart, setCurrentCart] = useState({});

  const currentProducts = useProducts();
  const currentCart = useCart();

  return (
    <div>
      {currentCart && <AppBar counter={currentCart.total_items} />}
      {currentProducts && <Products products={currentProducts} />}
      {currentCart && <Cart cart={currentCart} />}
    </div>
  );
}

export default App;
