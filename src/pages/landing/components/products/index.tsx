import { SimpleGrid } from "@chakra-ui/react";
import Product from "./product";

const Products = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
      <Product />
      <Product />
      <Product />
    </SimpleGrid>
  );
};
export default Products;
