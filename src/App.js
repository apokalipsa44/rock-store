import React from "react";
import Products from "./views/Products";
import commerce from "./utils/Commerce";
import { useState, useEffect } from "react";
import Cart from "./components/Cart";
import AppBar from "./views/AppBar";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  async function fetchProducts() {
    const { data } = await commerce.products.list();
    setProducts(data);
  }

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();
    setCart(cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <div>
      <AppBar counter={cart.total_items} />
      <Products products={products} />
      <Cart cart={cart} />
    </div>
  );
}

export default App;
