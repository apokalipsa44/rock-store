import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import ProductItem from "../components/products/ProductItem";
import { useContext } from "react";
import { StateContext } from "../utils/Context";

function Products() {
  const { products } = useContext(StateContext);
  console.log("products :>> ", products);
  return (
    <div>
      {products.length !== 0 ? (
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
          spacing={2}
        >
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={3} lg="auto">
              <ProductItem product={product} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box mt="20%">
          <Grid
            container
            spacing={5}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item>
              <CircularProgress />
            </Grid>
            <Grid item>
              <Typography variant="h4">Loading products...</Typography>
            </Grid>
          </Grid>
        </Box>
      )}
    </div>
  );
}

export default Products;
