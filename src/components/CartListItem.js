import { Grid, Typography } from "@material-ui/core";
import React from "react";

function CartListItem({ item }) {
  
    console.log("from item " + item.name);

  return (
    <Grid container>
      <Grid item>
        <Typography>{item.name}</Typography>
      </Grid>
      <Grid item>
        <Typography  dangerouslySetInnerHTML={{ __html: item.quantity }}></Typography>
      </Grid>
      <Grid item>
        <Typography></Typography>
      </Grid>
    </Grid>
  );
}

export default CartListItem;
