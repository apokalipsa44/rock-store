import React, { useContext } from "react";
import Badge from "@material-ui/core/Badge";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { StateContext } from "../utils/Context";
import { Button } from "@material-ui/core";

function AppBar() {
  const { currentCart, isDrawerOpen, setIsDrawerOpen } = useContext(
    StateContext
  );
  const handleCartButtonClick = () => {
    setIsDrawerOpen(!isDrawerOpen)
  };
  return (
    <div>
      Appbar
      <Badge badgeContent={currentCart.total_items} color="primary">
        <Button onClick={handleCartButtonClick}>
          <ShoppingCartOutlinedIcon />
        </Button>
      </Badge>
    </div>
  );
}

export default AppBar;
