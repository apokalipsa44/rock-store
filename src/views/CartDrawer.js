import React, { useContext } from "react";
import Drawer from "@material-ui/core/Drawer";
import Cart from "../components/Cart";
import { StateContext } from "../utils/Context";

function CartDrawer() {
  const { isDrawerOpen, setIsDrawerOpen } = useContext(StateContext);

  const toggleDrawer = () => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Drawer variant="temporary" open={isDrawerOpen} onClose={toggleDrawer()}>
      <Cart />
    </Drawer>
  );
}

export default CartDrawer;
