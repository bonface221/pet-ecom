import { Box, Divider, Heading, Stack } from "@chakra-ui/react";
import ProductCard from "./components/product-card";

import { products } from "../../../../../hooks/useFetchData";

interface Props {
  product: products;
}

const Product = ({ product }: Props) => {
  return (
    <Stack spacing={5}>
      <Heading fontSize="32px" fontFamily="Nunito Variable" fontWeight={700}>
        {product.name}
      </Heading>
      <Stack spacing={5}>
        {product?.Products?.map((p, i) => (
          <Box key={i}>
            <ProductCard productCard={p} />
            <Divider />
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};
export default Product;
