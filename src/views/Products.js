import { Grid } from "@material-ui/core";
import ProductItem from "../components/ProductItem";

function Products({ products }) {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="flex-start"
      spacing={2}
    >
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={4} md={3}>
          <ProductItem product={product} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Products;
