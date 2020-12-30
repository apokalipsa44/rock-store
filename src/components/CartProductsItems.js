import React, { useEffect, useState } from "react";
import CartListItem from "./CartListItem";

function CartProductsItems({ items }) {
  const [cartItems, setCartItems] = useState();

  useEffect(() => {
    setCartItems(items);
  }, [items]);

  const listCartItems = (cartItems) => {
    if (!cartItems) return;
    cartItems.map((item) => <CartListItem item={item} />);
  };
  return (
    <div>
      {/* {listCartItems(cartItems)} */}
    {(cartItems&& <CartListItem item={cartItems[1]}/>)}  
    </div>
  );
}

export default CartProductsItems;
