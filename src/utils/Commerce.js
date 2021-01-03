import Commerce from "@chec/commerce.js";
import { useEffect, useState } from "react";

const commerce = new Commerce(process.env.REACT_APP_COMMERCE_API_KEY, true);

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

export const fetchCart = async () => {
  try {
    const cart = await commerce.cart.retrieve();
    return cart;
  } catch (error) {
    console.log("error", error);
  }
};

export const fetchProducts = async () => {
  try {
    const { data } = await commerce.products.list();
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

export default commerce;
