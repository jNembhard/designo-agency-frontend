import React from "react";
import { GET_PRODUCT_GROUP } from "../../graphql/productQueries";
import { useQuery } from "@apollo/client";

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
    <div>
      {!loading && !error && (
        <div>
          {products.map((product) => (
            <div key={product.ProductID}>
              <img src={product.image} alt={product.name} />
              <div>
                <div>{product.title}</div>
                <div>{product.description}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
