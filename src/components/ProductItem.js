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

  const handleAddToCart = (e) => {
    commerce.cart.add(product.id, quantity).then((json) => console.log(json));
    setQuantity(0);
  };
  return (
    <Card style={{ width: "280px", height: "345px" }}>
      <CardActionArea>
        <CardMedia
          image={product.media.source}
          title={product.name}
          style={{ height: "140px", width: "240px" }}
        />
        <CardContent style={{ height: "110px" }}>
          <Typography variant="h6" component="h2">
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
          justify="space-around"
          alignItems="baseline"
        >
          <Grid item xs={8}>
            <QuantityCounter
              quantity={quantity}
              increaseCount={increaseCount}
              decreaseCount={decreaseCount}
            />
          </Grid>
          <Grid item xs={4}>
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
