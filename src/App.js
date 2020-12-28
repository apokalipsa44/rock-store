import React from "react";
import Products from "./views/Products";
import commerce from "./utils/Commerce";
import { useState, useEffect } from "react";
import Cart from "./components/Cart";

function App() {
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    const {data}= await commerce.products.list();
    setProducts(data);
  }

  useEffect(() => {
    fetchProducts()
  },[]);

  return (
    <div>
      <Products products={products} />
      <Cart/>
    </div>
  );
}

export default App;
