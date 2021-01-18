import { Button, Container, Typography, Box, Grid } from "@material-ui/core";
import React, { useContext } from "react";
import CartItems from "./CartItems";
import { StateContext } from "../../utils/Context";
import { Link } from "react-router-dom";
import cart from "./../../assets/cart/cart.png";

function Cart({ toggleDrawer }) {
  const { currentCart } = useContext(StateContext);

  const handleOnClick = () => {
    toggleDrawer(false);
  };

  return (
    <Container>
      <div style={{ width: "60vw", height: "100vh" }}>
        <Grid
          style={{ height: "100%" }}
          container
          direction="column"
          justify="flex-start"
          alignItems="stretch"
        >
          {currentCart.total_items > 0 ? (
            <div>
              <Grid item>
                <Typography
                  gutterBottom
                  variant="h6"
                  style={{ marginTop: "20%" }}
                >
                  Your cart content
                </Typography>
              </Grid>
              <Grid item>
                <CartItems items={currentCart.line_items} />
              </Grid>
              <Grid item>
                <Button
                  component={Link}
                  variant="outlined"
                  to="/checkout"
                  onClick={handleOnClick}
                  style={{margin:"15px"}}
                >
                  Checkout
                </Button>
              </Grid>
            </div>
          ) : (
            <div>
              <Grid item>
                <Typography
                  gutterBottom
                  variant="h4"
                  style={{ marginTop: "20%" }}
                >
                  Your cart is empty.
                </Typography>
                <Typography gutterBottom variant="h6">
                  Go back to shopping!
                </Typography>
              </Grid>
            </div>
          )}

          <Grid item style={{ flexGrow: 1 }}></Grid>
          <Grid item>
            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="flex-end"
            >
              <Grid item>
                <img src={cart} alt="cart" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

export default Cart;
