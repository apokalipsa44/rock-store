import React from "react";
import { Box, Button, Fade, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import stonesStacked from "../assets/stones/stones-stacke.png";

function Dashboard() {
  return (
    <Box mt="10%">
      <Grid direction="row" justify="center" align-items="center" container>
        <Grid item>
          <Fade timeout={2000} in>
            <div>
              <Box mb="20%">
                <Typography style={{ fontFamily: "Stone Hinge" }} variant="h4">
                  Welcome to Rock-store!
                </Typography>
                <Typography variant="h6">
                  Best selection of rocks on the web.
                </Typography>
              </Box>

              <Box ml="40%" mt="20%">
                <Button
                  size="large"
                  variant="contained"
                  component={Link}
                  to="/products"
                  color="secondary"
                >
                  Enter the store
                </Button>
              </Box>
            </div>
          </Fade>
        </Grid>
        <Grid item>
          <img
            src={stonesStacked}
            alt="stones"
            style={{
              width: "450px",
              filter: "drop-shadow(5px 5px 5px #222)",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
