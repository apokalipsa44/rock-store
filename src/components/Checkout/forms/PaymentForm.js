import React, { useContext } from "react";
import { Box, Grid, Paper, Typography, Divider } from "@material-ui/core";
import { StateContext } from "../../../utils/Context";
import CartItems from "../../CartItems";
import PaymentMethod from "./components/PaymentMethod";

function PaymentForm({ onSubmit, shippingData }) {
  const cart = useContext(StateContext);
  const { line_items } = cart.currentCart;
  const { subtotal } = cart.currentCart;
  console.log("line_items", line_items);
  console.log("subtotal", subtotal);
  const {
    city,
    lastName,
    name,
    phone,
    street,
    zipCode,
    shippingCost,
  } = shippingData;

  return (
    <div>
        <form
          id="paymentForm"
          onSubmit={onSubmit}
        >
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="stretch"
            spacing={2}
          >
            <Grid item>
              <Paper
                variant="outlined"
                style={{
                  backgroundColor: "#f2f3f5",
                  padding: "15px",
                }}
              >
                <Typography variant="h4">Order summary</Typography>
                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="flex-start"
                  spacing={5}
                >
                  <Grid item xs={12} sm={6}>
                    <Typography variant="h6">Address:</Typography>
                    <Typography variant="subtitle1">
                      {name} {lastName}
                    </Typography>
                    <Typography variant="subtitle1">{street}</Typography>
                    <Typography variant="subtitle1">
                      {zipCode} {city}
                    </Typography>
                    <Typography variant="subtitle1">
                      Phone number: {phone}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="h6">Cart items:</Typography>
                    <CartItems items={line_items} />
                    <Box height="40px"></Box>
                    <Divider />
                    <Typography gutterBottom variant="subtitle1">
                      shipping cost: {shippingCost}
                    </Typography>
                    <Typography variant="subtitle1">
                      <b>Total: {subtotal.raw + shippingCost} PLN</b>
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item>
              <Paper
                variant="outlined"
                style={{
                  backgroundColor: "#f2f3f5",
                  padding: "15px",
                }}
              >
                <Typography gutterBottom variant="h4">
                  Payment information
                </Typography>
                <PaymentMethod />
              </Paper>
            </Grid>
          </Grid>
        </form>
    </div>
  );
}

export default PaymentForm;
