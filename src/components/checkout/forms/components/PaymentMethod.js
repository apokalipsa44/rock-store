import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import creditCard from "./../../../../assets/payments/cards.png";
import wireTransfer from "./../../../../assets/payments/wire-transfer.png";
import CreditCard from "./CreditCard";
import { Grid, Typography } from "@material-ui/core";
import WireTransfer from "./WireTransfer";

function PaymentMethod() {
  const [value, setValue] = useState("card");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div component="fieldset">
      <FormLabel component="label">Select payment method</FormLabel>
      <RadioGroup name="paymentMethod" value={value} onChange={handleChange}>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item xs={2}>
            <FormControlLabel
              value="card"
              control={<Radio />}
              label={
                <img
                  src={creditCard}
                  width="116px"
                  height="30px"
                  alt="credit card"
                />
              }
            />
          </Grid>
          <Grid item xs={10}></Grid>
        </Grid>

        {value === "card" && (
          <div>
            <Typography>Your fake card data:</Typography>
            <CreditCard />
          </div>
        )}

        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item xs={2}>
            <FormControlLabel
              value="wire"
              control={<Radio />}
              label={
                <img
                  src={wireTransfer}
                  width="62px"
                  height="40px"
                  alt="wire transfer"
                />
              }
            />
          </Grid>
          <Grid item xs={10}></Grid>
        </Grid>

        {value === "wire" && (
          <div>
            <WireTransfer />
          </div>
        )}
      </RadioGroup>
    </div>
  );
}
export default PaymentMethod;
