import React, { useState, useEffect } from "react";
import {
  FormControl,
  Grid,
  Select,
  InputLabel,
  MenuItem,
  Box,
} from "@material-ui/core";
import _ from "lodash";

function DropdownSelector({ id, label, options, onChange, selectedOption }) {
  const [itemLabels, setItemLabels] = useState([]);

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

  const setSelectComponentValue = (selectedOption, itemLabels) => {
    _.pullAllWith(itemLabels, [selectedOption], !_.isEqual);
  };

  return (
    <Grid item xs={12} sm={6}>
      <Box width={1}>
        <FormControl style={{ width: "100%" }}>
          <InputLabel htmlFor={id}>{label}</InputLabel>
          <Select
            value={setSelectComponentValue()}
            onChange={onChange}
            defaultValue=""
          >
            {itemLabels &&
              itemLabels.map((object) => {
                return (
                  <MenuItem key={Object.keys(object)} value={object}>
                    {Object.values(object)}
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>
      </Box>
    </Grid>
  );
}

export default DropdownSelector;
