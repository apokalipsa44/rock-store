import React, { useContext } from "react";
import Badge from "@material-ui/core/Badge";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { StateContext } from "../Context";

function AppBar({ counter }) {
  const state=useContext(StateContext)
  return (
    <div>
      Appbar
      <Badge badgeContent={counter} color="primary">
        <ShoppingCartOutlinedIcon />
      </Badge>
    </div>
  );
}

export default AppBar;
