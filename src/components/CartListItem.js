import { Grid, Typography } from "@material-ui/core";
import React from "react";

function CartListItem({ item }) {
  return (
    <Grid container>
      <Grid item>
        <Typography>{item.name}</Typography>
      </Grid>
      <Grid item>
        <Typography>{item.quantity}</Typography>
      </Grid>
      <Grid item>
            <Typography>{item.line_total}</Typography>
        </Grid>
    </Grid>
  );
}

export default CartListItem;
