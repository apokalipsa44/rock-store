import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";

function CartItems({ items }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(items);
  }, [items]);

 
  return <div>
  {(cartItems)&&(cartItems.map(item=><CartItem key={item.id} item={item}/>))}
  </div>;
}

export default CartItems;
