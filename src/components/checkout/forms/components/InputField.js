import { Grid, TextField } from "@material-ui/core";
import React from "react";
import { useFormContext, Controller } from "react-hook-form";

function InputField({ name, label, required, valueFromLocalStorage, localStorageKey }) {
  const { control } = useFormContext();

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        defaultValue={
          localStorage.getItem(localStorageKey)
            ? JSON.parse(localStorage.getItem(localStorageKey))[
                valueFromLocalStorage
              ]
            : ""
        }
        as={TextField}
        control={control}
        fullWidth
        name={name}
        label={label}
        required={required}
      />
    </Grid>
  );
}

export default InputField;
