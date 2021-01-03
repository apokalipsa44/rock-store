import Commerce from "@chec/commerce.js";
import { useState, useEffect } from "react";

const commerce = new Commerce(process.env.REACT_APP_COMMERCE_API_KEY, true);

export const useProducts = () => {
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
  }, []);
  return products;
};

export const useCart = () => {
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
  }, []);

  return cart;
};

export async function fetchCart() {
  let cart = {};
  try {
    cart = await commerce.cart.retrieve();
  } catch (error) {
    console.log("error", error);
  }
  return cart;
}

export default commerce;
