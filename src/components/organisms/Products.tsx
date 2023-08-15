import useMediaQuery from "@mui/material/useMediaQuery";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT_GROUP } from "../../graphql/productQueries";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { IProduct } from "../../interface/Product";
import Product from "../molecules/Product";

const Products = ({ productType }: { productType: string }) => {
  const isBreakpoint1024 = useMediaQuery("(min-width: 1024px)");
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
          spacing={isBreakpoint1024 ? 2 : 0}
          sx={{
            px: {
              mobile: "1.5rem",
              tablet: "unset",
            },
            alignItems: "left",
            justifyContent: "center",
            margin: { tablet: "auto 0", laptop: "auto" },
          }}
        >
          {products.map((product: IProduct) => (
            <Product key={product.ProductID} {...product} />
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Products;
