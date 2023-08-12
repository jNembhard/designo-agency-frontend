import { GET_PRODUCT_GROUP } from "../../graphql/productQueries";
import { useQuery } from "@apollo/client";
import Stack from "@mui/material/Stack";
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
      }}
    >
      {!loading && !error && (
        <Stack
          sx={{
            mx: {
              mobile: "1.5rem",
            },
          }}
        >
          {products.map((product) => (
            <Card
              key={product.ProductID}
              sx={{
                my: {
                  mobile: "1.25rem",
                },
                borderRadius: "0.938rem",
                boxShadow: "none",
              }}
            >
              <CardMedia
                component="img"
                alt={product.description}
                image={
                  process.env.REACT_APP_CLOUDFRONT_ENDPOINT + product.image
                }
              />
              <CardContent
                sx={{
                  bgcolor: "sand",
                  margin: {
                    padding: "2rem 1.875rem",
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
            </Card>
          ))}
        </Stack>
      )}
    </Box>
  );
};

export default Products;
