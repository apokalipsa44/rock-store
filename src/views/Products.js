import { Grid } from "@material-ui/core";
import ProductItem from "../components/ProductItem";

function Products({ products }) {
  console.log({ products });
  return (
    <Grid container direction="row" justify="center" alignItems="flex-start">
      {products.map((product) => (
        <Grid key={product.id} item>
          <ProductItem product={product} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Products;
