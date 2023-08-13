import { GET_PRODUCT_GROUP } from "../../graphql/productQueries";
import { useQuery } from "@apollo/client";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Products = ({ productType }: { productType: string }) => {
  const { loading, error, data } = useQuery(GET_PRODUCT_GROUP, {
    variables: { ProductType: productType },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error occured while fetching data</div>;
  }

  const products = [...data.productGroup.product];

  return (
    <Box
      sx={{
        my: {
          mobile: "6rem",
        },
        mx: {
          tablet: "2.5rem",
        },
      }}
    >
      {!loading && !error && (
        <Grid
          container
          spacing={2}
          sx={{
            px: {
              mobile: "1.5rem",
              tablet: "unset",
            },
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {products.map((product) => (
            <Grid item key={product.ProductID} xs={12} md={4}>
              <Card
                sx={{
                  my: {
                    mobile: "1.25rem",
                  },
                  borderRadius: "0.938rem",
                  boxShadow: "none",
                  height: { tablet: "19.375rem", laptop: "unset" },
                  maxWidth: { laptop: "21.875rem" },
                }}
              >
                <Box
                  sx={{
                    display: { tablet: "flex" },
                    flexDirection: { tablet: "row", laptop: "column" },
                    bgcolor: "sand",
                  }}
                >
                  <CardMedia
                    component="img"
                    alt={product.description}
                    sx={{ maxWidth: { tablet: "21.188rem", laptop: "unset" } }}
                    image={
                      process.env.REACT_APP_CLOUDFRONT_ENDPOINT + product.image
                    }
                  />

                  <CardContent
                    sx={{
                      my: "auto",
                      padding: {
                        mobile: "2rem 1.875rem",
                      },
                      textAlign: "center",
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
                      {product.title}
                    </Typography>
                    <Typography variant="body1" color="black.main">
                      {product.description}
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Products;
