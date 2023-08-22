import useMediaQuery from "@mui/material/useMediaQuery";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT_GROUP } from "../../../graphql/productQueries";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { IProduct } from "../../../interface/Product";
import Product from "../../molecules/Product/Product";
import { ProductSkeleton } from "./ProductSkeleton";
import { productsStyles } from "./ProductsStyles";

type ProductType = {
  productType: string;
};

const Products = ({ productType }: ProductType) => {
  const isBreakpoint1024 = useMediaQuery("(min-width: 1024px)");
  const { loading, error, data } = useQuery(GET_PRODUCT_GROUP, {
    variables: { ProductType: productType },
  });

  if (loading) {
    return <ProductSkeleton group={productType} />;
  }

  if (error) {
    return <div>Error occured while fetching data</div>;
  }

  const products = [...data.productGroup.product];

  return (
    <Box sx={{ ...productsStyles.wrapper }}>
      {!loading && !error && (
        <Grid
          container
          spacing={isBreakpoint1024 ? 2 : 0}
          sx={{ ...productsStyles.grid }}
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
