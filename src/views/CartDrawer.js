import React, {useState} from "react";
import Drawer from '@material-ui/core/Drawer';
import Cart from "../components/Cart";


function CartDrawer() {
  const [isOpen, setIsOpen] = useState(true)
  const toggleDrawer = () => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setIsOpen(!isOpen);
  };

  return (
    <Drawer variant="temporary" open={isOpen} onClose={toggleDrawer()}><Cart/></Drawer>
  )
}

export default CartDrawer;
