import React from "react";
import Badge from "@material-ui/core/Badge";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

function AppBar({counter}) {
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
