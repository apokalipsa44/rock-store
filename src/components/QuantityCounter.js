import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

function QuantityCounter({ quantity, increaseCount, decreaseCount }) {
  return (
    <div>
      <Button display="inline" onClick={() => decreaseCount()}>
        -
      </Button>
      <Typography
        display="inline"
        variant="body1"
        color="textSecondary"
        component="p"
      >
        {quantity}
      </Typography>
      <Button display="inline" onClick={() => increaseCount()}>
        +
      </Button>
    </div>
  );
}

export default QuantityCounter;
