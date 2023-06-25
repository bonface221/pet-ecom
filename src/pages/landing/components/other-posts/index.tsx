import { Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import Blog from "../our-blog/components/blog";

const OtherPosts = () => {
  return (
    <Stack
      fontFamily="Nunito Variable"
      mx={{ base: "2%", md: "5%", lg: "8%", xl: "10%" }}
      my={16}
      spacing={8}
    >
      <Heading fontSize="46px" fontWeight={800} alignSelf="center">
        Other Posts
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        <Blog />
        <Blog />
        <Blog />
      </SimpleGrid>
    </Stack>
  );
};
export default OtherPosts;
