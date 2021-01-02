import React from "react";
import Products from "./views/Products";
import commerce from "./utils/Commerce";
import { useState, useEffect } from "react";
import Cart from "./components/Cart";
import AppBar from "./views/AppBar";

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const { data } = await commerce.products.list();
        setProducts(data);
      } catch (error) {
        console.log("error", error);
      }
    }
    fetchProducts();
    
  }, [products]);
  return products;
};

const useCart = () => {
  const [cart, setCart] = useState({});

  useEffect(() => {
    async function fetchCart() {
      try {
        const cart = await commerce.cart.retrieve();
        setCart(cart);
      } catch (error) {
        console.log("error", error);
      }
    }
    fetchCart();
  }, [cart]);

  return cart;
};

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
