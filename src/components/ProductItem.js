import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Box, Grid } from "@material-ui/core";

function ProductItem({ product }) {
  const [quantity, setQuantity] = useState(0);
  console.log(product);

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
        <Grid container xs={12}>
          <Grid item>
            <div>
              <Button
                display="inline"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </Button>
              <Typography
                display="inline"
                variant="body1"
                color="textSecondary"
                component="p"
              >
                {quantity}
              </Typography>
              <Button
                display="inline"
                onClick={() => setQuantity(quantity - 1)}
              >
                -
              </Button>
            </div>
          </Grid>
          <Grid item>
            <Button size="small" color="primary">
              BUY
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
}

export default ProductItem;
