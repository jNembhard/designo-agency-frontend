import { IProduct } from "../../../interface/Product";
import { productStyles } from "./ProductStyles";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const Product = ({ description, image, title }: IProduct) => {
  const [hovered, setHovered] = useState<Boolean>(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <Grid item xs={12} md={4} sx={{ ...productStyles.grid }}>
      <Card
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{ ...productStyles.card }}
      >
        <Box
          aria-label={hovered ? "peach background" : "sand background"}
          bgcolor={hovered ? "peach.main" : "sand"}
          sx={{ ...productStyles.container }}
        >
          <CardMedia
            component="img"
            alt={description}
            sx={{ ...productStyles.cardMedia }}
            image={process.env.REACT_APP_CLOUDFRONT_ENDPOINT + image}
          />
          <CardContent sx={{ ...productStyles.cardContent }}>
            <Typography
              variant="h3"
              aria-label={hovered ? "white text" : "peach text"}
              color={hovered ? "white.main" : "peach.main"}
              sx={{ ...productStyles.title }}
            >
              {title}
            </Typography>
            <Typography
              variant="body1"
              aria-label={hovered ? "white text" : "black text"}
              color={hovered ? "white.main" : "black.main"}
              sx={{ ...productStyles.description }}
            >
              {description}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Grid>
  );
};

export default Product;
