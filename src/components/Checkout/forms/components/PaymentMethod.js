import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import creditCard from "./../../../../assets/payments/cards.png";
import wireTransfer from "./../../../../assets/payments/wire-transfer.png";
import CreditCard from "./CreditCard";
import { Typography } from "@material-ui/core";
import WireTransfer from "./WireTransfer";

function PaymentMethod() {
  const [value, setValue] = useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Select payment method</FormLabel>
      <RadioGroup name="paymentMethod" value={value} onChange={handleChange}>
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
        {value === "card" && (
          <div>
            <Typography>Your fake card data:</Typography>
            <CreditCard />
          </div>
        )} 
      

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
         {value === "wire" && (
          <div>
            <WireTransfer/>
          </div>
        )}
      </RadioGroup>
    </FormControl>
  );
}
export default PaymentMethod;
