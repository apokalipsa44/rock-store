import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

function QuantityCounter({ quantity, increaseCount, decreaseCount }) {
  return (
    <Grid container direction="row" justify="flex-start" alignItems="baseline">
      <Grid item>
        <Button onClick={() => decreaseCount()}>-</Button>
      </Grid>
      <Grid item>
        <Typography
          variant="body1"
          color="textSecondary"
          component="p"
          ml={2}
          mr={2}
        >
          {quantity}
        </Typography>
      </Grid>

      <Grid item>
        <Button onClick={() => increaseCount()}>+</Button>
      </Grid>
    </Grid>
  );
}

export default QuantityCounter;
