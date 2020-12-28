import React from "react";
import Products from "./views/Products";
import commerce from "./utils/Commerce";
import { useState, useEffect } from "react";

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
    </div>
  );
}

export default App;
