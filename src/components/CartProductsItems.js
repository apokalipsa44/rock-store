import React from "react";
import CartListItem from "./CartListItem";

function CartProductsItems({ items }) {
    console.log('from items'+items)
  return (
    <div>
      {/* {cartItems.map((item) => (
        <CartListItem item={item} />
      ))} */}
    </div>
  );
}

export default CartProductsItems;
