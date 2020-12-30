import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import QuantityCounter from "./QuantityCounter";
import commerce from "../utils/Commerce";

function ProductItem({ product }) {
  const [quantity, setQuantity] = useState(0);

  const increaseCount = () => {
    setQuantity(quantity + 1);
  };

  const decreaseCount = () => {
    setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    commerce.cart.add(product.id, quantity).then(json => console.log(json));
  };
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          image={product.media.source}
          title={product.name}
          style={{ height: "140px", width: "240px" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography
            dangerouslySetInnerHTML={{ __html: product.description }}
            variant="body2"
            color="textSecondary"
            component="p"
          />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="baseline"
        >
          <Grid item xs={6} sm={8} md={8}>
            <QuantityCounter
              quantity={quantity}
              increaseCount={increaseCount}
              decreaseCount={decreaseCount}
            />
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <div>
              <Button size="small" color="primary" onClick={handleAddToCart}>
                BUY
              </Button>
            </div>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}

export default ProductItem;
