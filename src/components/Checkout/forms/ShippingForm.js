import {
  Button,
  Container,
  FormControl,
  Grid,
  Paper,
  Select,
  Typography,
  InputLabel,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import InputField from "./InputField";
import DropdownSelector from "./DropdownSelector";
import { fetchCountries, fetchZones } from "../../../utils/Commerce";

function ShippingForm({ checkoutToken }) {
  const [countries, setCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState({});
  const [shippingZones, setShippingZones] = useState([]);
  const [shippingZone, setShippingZone] = useState("");
  const [shippingRates, setShippingRates] = useState("");

  // console.log("shippingCountry", shippingCountry);
  // console.log("shippingZone", shippingZone);


  const updateCountries = async (checkoutToken) => {
    const countries = await fetchCountries(checkoutToken);
    setCountries(countries);
  };

  const updateZones = async (countryCode) => {
    const shippingZone = await fetchZones(countryCode);
    setShippingZone(shippingZone);
  };

  useEffect(() => {
    if (checkoutToken) updateCountries(checkoutToken.id);
  }, [checkoutToken]);

  useEffect(() => {
    if (shippingCountry) updateZones(Object.keys(shippingCountry));
  }, [shippingCountry]);

  const methods = useForm();

  return (
    <Container>
      <FormProvider {...methods}>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
          spacing={2}
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
              <Typography>Personal information</Typography>
              <Grid container spacing={5}>
                <InputField name="name" label="Name" required={true} />
                <InputField name="lastName" label="Last name" required={true} />
                <InputField
                  name="phone"
                  label="Phone number"
                  required={false}
                />
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
              <Typography gutterBottom>Address</Typography>
              <Grid container spacing={5}>
                <InputField name="street" label="Street" required={true} />
                <InputField name="zipCode" label="ZIP Code" required={true} />
                <InputField name="city" label="City" required={true} />
                <DropdownSelector
                selectedOption={shippingCountry}
                  id="country"
                  label="Country"
                  options={countries}
                  onChange={(e) => setShippingCountry(e.target.value)}
                />
                <DropdownSelector id="city" name="City" label="City" />
                <DropdownSelector
                  id="shippingOptions"
                  name="Shipping cost"
                  label="Shipping cost"
                />
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </FormProvider>
    </Container>
  );
}

export default ShippingForm;
