import React from "react";
import Products from "./views/Products";
import commerce from "./utils/Commerce";
import { useState, useEffect } from "react";
import Cart from "./components/Cart";
import AppBar from "./views/AppBar";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  axios.defaults.timeout = 2000;
  axios.defaults.headers = {
    "X-Authorization": process.env.REACT_APP_COMMERCE_API_KEY,
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  useEffect(() => {
    async function fetchProducts() {
      try {
        const {data} = await axios.get("https://api.chec.io/v1/products");
        setProducts(data.data);
      } catch (error) {}
      // try {
      //   const { data } = await commerce.products.list();
      //   setProducts(data);
      // } catch (error) {
      //   console.log("error", error);
      // }
    }

    async function fetchCart() {
      try {
        const cart = await commerce.cart.retrieve();
        setCart(cart);
      } catch (error) {
        console.log("error", error);
      }
    }
    fetchProducts();
    fetchCart();
  });

  return (
    <div>
      <AppBar counter={cart.total_items} />
      <Products products={products} />
      <Cart cart={cart} />
    </div>
  );
}

export default App;
