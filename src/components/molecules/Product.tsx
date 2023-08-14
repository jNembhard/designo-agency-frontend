import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { IProduct } from "../../interface/Product";

const Product: React.FC<IProduct> = ({ description, image, title }) => {
  return (
    <Grid xs={12} md={4} sx={{ mx: { laptop: "0.938rem" } }}>
      <Card
        sx={{
          my: {
            mobile: "1.25rem",
          },
          borderRadius: "0.938rem",
          boxShadow: "none",
          height: { tablet: "19.375rem", laptop: "29.875rem" },
          maxWidth: { laptop: "21.875rem" },
        }}
      >
        <Box
          sx={{
            display: { tablet: "flex" },
            flexDirection: { tablet: "row", laptop: "column" },
            bgcolor: "sand",
            borderRadius: { laptop: "0.938rem" },
          }}
        >
          <CardMedia
            component="img"
            alt={description}
            sx={{ maxWidth: { tablet: "21.188rem", laptop: "unset" } }}
            image={process.env.REACT_APP_CLOUDFRONT_ENDPOINT + image}
          />

          <CardContent
            sx={{
              my: "auto",
              mx: { laptop: "auto" },
              padding: {
                mobile: "2rem 1.875rem",
              },
              textAlign: "center",
              borderRaidus: { laptop: "0.938rem" },
            }}
          >
            <Typography
              variant="h3"
              color="peach.main"
              textTransform="uppercase"
              sx={{
                mb: {
                  mobile: "1rem",
                },
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="body1"
              color="black.main"
              sx={{ width: { laptop: "15.625rem" } }}
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
