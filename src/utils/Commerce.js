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

export const useCheckoutToken = () => {
  const [checkoutToken, setCheckoutToken] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const token = await commerce.checkout.generateTokenFrom(
          "cart",
          commerce.cart.id()
        );
        setCheckoutToken(token);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, []);
  return checkoutToken;
};

export const fetchCheckoutToken = async () => {
  let token = {};
  try {
    token = await commerce.checkout.generateTokenFrom(
      "cart",
      commerce.cart.id()
    );
    console.log("token", token);
  } catch (error) {
    console.log("error", error);
  }
  return token;
};

export const fetchCountries = async (checkoutToken) => {
  try {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutToken
    );
    return countries;
  } catch (error) {
    console.log("error", error);
  }
};
export const fetchZones = async (countryCode) => {
  try {
    const { subdivisions } = await commerce.services.localeListSubdivisions(
      countryCode
    );
    return subdivisions;
  } catch (error) {
    console.log("error", error);
  }
};
export const fetchRates = async (checkoutTokenId, country, region) => {
  try {
    const options = await commerce.checkout.getShippingOptions(
      checkoutTokenId,
      {
        country: country[0],
        region: region[0],
      }
    );

    return options;
  } catch (error) {
    console.log("error", error);
  }
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

export async function emptyCart() {
  await commerce.cart.empty();
}

export default commerce;
