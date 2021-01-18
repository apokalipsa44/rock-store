import { Container, Grid, Paper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import InputField from "./components/InputField";
import DropdownSelector from "./components/DropdownSelector";
import {
  fetchCountries,
  fetchRates,
  fetchZones,
} from "../../../utils/Commerce";
import _ from "lodash";

function ShippingForm({ checkoutToken, onSubmit }) {
  const methods = useForm();
  // console.log("methods: ", methods);
  const [countries, setCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState({});
  const [shippingZones, setShippingZones] = useState({});
  const [shippingZone, setShippingZone] = useState({});
  const [shippingRates, setShippingRates] = useState([]);
  const [shippingCost, setShippingCost] = useState(0);

  const updateCountries = async (checkoutToken) => {
    if(!_.isEmpty(checkoutToken)){
        const countries = await fetchCountries(checkoutToken);
    setCountries(countries);
    }
  };
  const updateZones = async (countryCode) => {
    if (!_.isEmpty(shippingCountry)) {
      console.log("shippingCountry from update zones", shippingCountry);
      const shippingZone = await fetchZones(countryCode);
      setShippingZones(shippingZone);
    }
  };
  const updateRates = async (
    checkoutTokenId,
    shippingCountry,
    shippingZone
  ) => {
    if (!_.isEmpty(shippingZone)) {
      const rates = await fetchRates(
        checkoutTokenId,
        shippingCountry,
        shippingZone
      );
      setShippingRates(rates);
      if (rates) setShippingCost(rates[0].price.raw);
    }
  };

  useEffect(() => {
    if (checkoutToken) updateCountries(checkoutToken.id);
  }, [checkoutToken]);

  useEffect(() => {
    if (shippingCountry) updateZones(Object.keys(shippingCountry));
  }, [shippingCountry]);

  useEffect(() => {
    if (shippingZone && checkoutToken && shippingCountry)
      updateRates(
        checkoutToken.id,
        Object.keys(shippingCountry),
        Object.keys(shippingZone)
      );
  }, [shippingZone]);

  return (
    <Container>
      <FormProvider {...methods}>
        <form
          id="shippingForm"
          onSubmit={methods.handleSubmit((data) =>
            onSubmit({ ...data, shippingCountry, shippingCost })
          )}
        >
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="stretch"
            spacing={0}
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
                  <InputField
                    name="name"
                    label="Name"
                    required
                    valueFromLocalStorage="name"
                    localStorageKey="shippingData"
                  />

                  <InputField
                    name="lastName"
                    label="Last name"
                    required
                    valueFromLocalStorage="lastName"
                    localStorageKey="shippingData"
                  />
                  <InputField
                    name="phone"
                    label="Phone number"
                    required={false}
                    valueFromLocalStorage="phone"
                    localStorageKey="shippingData"
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
                  <InputField
                    name="street"
                    label="Street"
                    required
                    valueFromLocalStorage="street"
                    localStorageKey="shippingData"
                  />
                  <InputField
                    name="zipCode"
                    label="ZIP Code"
                    required
                    valueFromLocalStorage="zipCode"
                    localStorageKey="shippingData"
                  />
                  <InputField
                    name="city"
                    label="City"
                    required
                    valueFromLocalStorage="city"
                    localStorageKey="shippingData"
                  />
                  <DropdownSelector
                    selectedOption={shippingCountry}
                    id="country"
                    label="Country"
                    options={countries}
                    onChange={(e) => setShippingCountry(e.target.value)}
                  />
                  <DropdownSelector
                    selectedOption={shippingZone}
                    id="shippingZone"
                    label="Shipping zones"
                    options={shippingZones}
                    onChange={(e) => setShippingZone(e.target.value)}
                  />
                  {shippingRates && shippingRates.length !== 0 && (
                    <Typography>
                      Shipping cost [{shippingRates[0].description}]:
                      {shippingRates[0].price.formatted_with_code}
                    </Typography>
                  )}
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </Container>
  );
}

export default ShippingForm;
