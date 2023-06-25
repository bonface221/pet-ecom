import { Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Blog from "./components/blog";

const OurBlog = () => {
  return (
    <Stack fontFamily="Nunito Variable">
      <Text
        alignSelf="center"
        color="brand.blue"
        fontSize="16px"
        fontWeight={700}
      >
        OUR BLOG
      </Text>
      <Heading
        alignSelf="center"
        fontSize="46px"
        fontWeight={800}
        color="brand.dark"
      >
        Latest Post
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        <Blog />
        <Blog />
        <Blog />
      </SimpleGrid>
    </Stack>
  );
};
export default OurBlog;
