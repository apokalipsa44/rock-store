import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  Paper,
  Select,
  Typography,
  InputLabel,
} from "@material-ui/core";
import InputField from "./InputField";
import { useForm, FormProvider } from "react-hook-form";
import { StateContext } from "../../../utils/Context";

function PaymentForm({ onSubmit, shippingData }) {
  const methods = useForm();
  const cart = useContext(StateContext);
  const { line_items } = cart.currentCart;
  const { subtotal } = cart.currentCart;
  console.log("line_items", line_items);
  console.log('subtotal', subtotal)
  const { city, lastName, name, phone, street, zipCode, shippingCost } = shippingData;
 
  return (
    <div>
      <FormProvider {...methods}>
        <form
          id="paymentForm"
          onSubmit={methods.handleSubmit((data) =>
            console.log("onSubmit payment ", data)
          )}
        >
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="stretch"
            spacing={5}
          >
            <Grid item>
              <Paper
                variant="outlined"
                style={{
                  backgroundColor: "#f2f3f5",
                  padding: "15px",
                  margin: "10px",
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
                  <Grid item spacing={3}>
                    <Typography variant="h6">Adress:</Typography>
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
                  <Grid item spacing={3}>
                    <Typography variant="h6">Cart items:</Typography>
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
                  margin: "10px",
                }}
              >
                <Typography>Payment information</Typography>
                <Grid container spacing={5}>
                  <Grid item>
                    <Typography>fake card or bank</Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </div>
  );
}

export default PaymentForm;
