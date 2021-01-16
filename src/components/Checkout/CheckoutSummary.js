import { Typography, Button, Fade, Container, Box } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

function CheckoutSummary() {
  return (
    <Container>
      <Typography gutterBottom variant="h4">
        Thanks for shopping
      </Typography>

      <Fade timeout={3500} in>
        <Box m={3}>
          <Button component={Link} to="/products" variant="contained" size="large">
            Back to the store
          </Button>
        </Box>
      </Fade>
    </Container>
  );
}

export default CheckoutSummary;
