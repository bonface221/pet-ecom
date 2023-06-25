import { SimpleGrid } from "@chakra-ui/react";
import Product from "./product";
import { useContext } from "react";
import { petEcomContext } from "../../../../App";

const Products = () => {
  const data = useContext(petEcomContext);
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
      {data?.AllProducts.map((product, i) => (
        <Product key={i} product={product} />
      ))}
    </SimpleGrid>
  );
};
export default Products;
