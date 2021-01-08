import React, { useState, useEffect } from "react";
import {
  FormControl,
  Grid,
  Select,
  InputLabel,
  MenuItem,
} from "@material-ui/core";

function DropdownSelector({  id, label, options, onChange, selectedOption }) {
  const [itemLabels, setItemLabels] = useState([]);
  // const [selectedCountry, setSelectedCountry] = useState()
  console.log("itemLabels", itemLabels);

  useEffect(() => {
    if (options) {
      const itemLabels = [];
      for (const [key, value] of Object.entries(options)) {
        const object = {
          [key]: value,
        };
        itemLabels.push(object);
      }
      setItemLabels(itemLabels);
    }
  }, [options]);

  return (
    <Grid item xs={12} sm={6}>
      <FormControl style={{ width: 240 }}>
        <InputLabel htmlFor={id}>{label}</InputLabel>
        <Select value={selectedOption} onChange={onChange}>
     
          {itemLabels &&
            itemLabels.map(object => {
              return (
                <MenuItem key={Object.keys(object)} value={object}>
                  {Object.values(object)}
                </MenuItem>
              );
            })}
        </Select>
      </FormControl>
    </Grid>
  );
}

export default DropdownSelector;
