import { Box, Divider, Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import ProductCard from "./components/product-card";

const Product = () => {
  return (
    <Stack spacing={5}>
      <Heading fontSize="32px" fontFamily="Nunito Variable" fontWeight={700}>
        Featured Products
      </Heading>
      <Stack spacing={5}>
        {[1, 2, 3, 4].map((item, i) => (
          <Box key={i}>
            <ProductCard key={i} />
            <Divider />
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};
export default Product;
