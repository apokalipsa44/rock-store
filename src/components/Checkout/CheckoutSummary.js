import { Typography, Button, Fade, Container, Box } from "@material-ui/core";
import React from "react";

function CheckoutSummary() {
  const handleOnClick = () => {
      
  };
  return (
    <Container>
      <Fade timeout={2000} in>
        <div>
          <Typography gutterBottom variant="h4">Thanks for shopping</Typography>
        </div>
      </Fade>

      <Fade timeout={3500} in>
        <Box m={3}>
          <Button variant="contained" size='large' onClick={handleOnClick}>Back to the store</Button>
        </Box>
      </Fade>
    </Container>
  );
}

export default CheckoutSummary;
