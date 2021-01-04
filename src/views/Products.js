import { Grid } from "@material-ui/core";
import ProductItem from "../components/ProductItem";

function Products({ products, setCurrentCart }) {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="flex-start"
      spacing={2}
    >
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={3} lg="auto">
          <ProductItem product={product} setCurrentCart={setCurrentCart} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Products;
