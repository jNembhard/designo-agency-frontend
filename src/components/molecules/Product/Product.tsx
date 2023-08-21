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
  const [hovered, setHovered] = useState(false);
  return (
    <Grid xs={12} md={4} sx={{ ...productStyles.grid }}>
      <Card
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        sx={{ ...productStyles.card }}
      >
        <Box
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
              color={hovered ? "white.main" : "peach.main"}
              sx={{ ...productStyles.title }}
            >
              {title}
            </Typography>
            <Typography
              variant="body1"
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
