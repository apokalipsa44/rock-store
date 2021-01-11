import {  Button, Container, Typography, Box } from "@material-ui/core";
import React, { useContext } from "react";
import CartItems from "./CartItems";
import { StateContext } from "../utils/Context";
import { Link } from "react-router-dom";

function Cart({toggleDrawer}) {
  const { currentCart } = useContext(StateContext);
  
  const handleOnClick=()=>{
toggleDrawer(false)
  }
 
  return (
    <div  style={ {width: '60vw'} }>
    <Container>
    <Typography gutterBottom variant='h6'>Your cart content</Typography>
      <CartItems items={currentCart.line_items} />
      <Box height='40px'></Box>
      <Button component={Link} variant='outlined' to='/checkout' onClick={handleOnClick}>Checkout</Button>
    </Container>
    </div>
  );
}

export default Cart;
