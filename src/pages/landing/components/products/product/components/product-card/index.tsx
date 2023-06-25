import { Box, Flex, Heading, Icon, Image, Stack, Text } from "@chakra-ui/react";
import FeaturedP1 from "/imgs/fp1.png";
import { AiFillStar } from "react-icons/ai";

const ProductCard = () => {
  return (
    <Flex gap={4}>
      <Flex align="center" bg="brand.bgBlue">
        <Image objectFit="contain" src={FeaturedP1} alt="featured product" />
      </Flex>

      <Stack gap={2}>
        <Heading fontSize="20px" fontFamily="Nunito Variable" fontWeight={800}>
          Detachable Gravity Bowl Food Feeder
        </Heading>
        <Flex>
          {[1, 2, 3, 4].map((item, i) => (
            <Icon key={i} color="brand.yellow" as={AiFillStar} />
          ))}
        </Flex>
        <Text
          fontSize="22px"
          color="brand.blue"
          fontWeight={800}
          fontFamily="Nunito Variable"
        >
          $30.12
        </Text>
      </Stack>
    </Flex>
  );
};
export default ProductCard;
