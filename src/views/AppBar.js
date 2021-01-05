import React, { useContext } from "react";
import Badge from "@material-ui/core/Badge";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { StateContext } from "../Context";

function AppBar() {
  const {currentCart}=useContext(StateContext)
  return (
    <div>
      Appbar
      <Badge badgeContent={currentCart.total_items} color="primary">
        <ShoppingCartOutlinedIcon />
      </Badge>
    </div>
  );
}

export default AppBar;
