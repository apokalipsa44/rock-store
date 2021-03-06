import React, { useContext } from "react";
import Badge from "@material-ui/core/Badge";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { StateContext } from "../utils/Context";
import {
  Button,
  AppBar,
  Typography,
  Grid,
  Box,
  Toolbar,
} from "@material-ui/core";
import appBarIcon from "../assets/stones/appbar-icon.png";
import { Link } from "react-router-dom";

function TopBar() {
  const { currentCart, isDrawerOpen, setIsDrawerOpen } = useContext(
    StateContext
  );
  const handleCartButtonClick = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <Box mb={5}>
      <AppBar position="static" color="transparent">
        <Toolbar style={{ padding: "14px", backgroundColor: "#ebfbff" }}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="flex-start"
            spacing={4}
          >
            <Grid item>
              <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="flex-start"
              >
                <Grid item>
                  <Link to="/" style={{color:'black', textDecoration:"none" }}>
                    <Typography
                      style={{ fontFamily: "Stone Hinge"}}
                      variant="h2"
                    >
                      Rock Store
                    </Typography>
                  </Link>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">
                    No.1 place with rocks on the Web!
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <div style={{ margin: "15px" }}>
                <Badge badgeContent={currentCart.total_items} color="primary">
                  <Button
                    style={{ zIndex: "1150" }}
                    onClick={handleCartButtonClick}
                  >
                    <ShoppingCartOutlinedIcon />
                  </Button>
                </Badge>
              </div>
            </Grid>
          </Grid>
        </Toolbar>
        <img
          src={appBarIcon}
          alt="icon"
          style={{
            position: "absolute",
            top: "-5px",
            right: "-30px",
            width: "400px",
            height: "180px",
            filter: "drop-shadow(5px 5px 5px #222)",
            zIndex: "1140",
          }}
        />
      </AppBar>
    </Box>
  );
}

export default TopBar;
