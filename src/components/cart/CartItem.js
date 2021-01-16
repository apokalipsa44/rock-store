import React  from "react";
import { Grid, Typography } from "@material-ui/core";


function CartItem({ item }) {

  return (
    <>
       <Grid container spacing={2}>
      <Grid item>
        <Typography>{item.name}</Typography>
      </Grid>
      <Grid item>
        <Typography  dangerouslySetInnerHTML={{ __html: item.quantity }}></Typography>
      </Grid>
      <Grid item>
        <Typography>{item.line_total.formatted}</Typography>
      </Grid>
    </Grid>
    </>
  );
}

export default CartItem;
