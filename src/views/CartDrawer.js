import React, { useContext } from "react";
import Drawer from "@material-ui/core/Drawer";
import Cart from "../components/cart/Cart";
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
    
      <Drawer
        anchor="right"
        variant="temporary"
        open={isDrawerOpen}
        onClose={toggleDrawer()}
      >
        <Cart toggleDrawer={setIsDrawerOpen} />
      </Drawer>
    
  );
}

export default CartDrawer;
