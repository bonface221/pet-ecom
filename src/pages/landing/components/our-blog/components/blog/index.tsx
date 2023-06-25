import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import Blog1 from "/imgs/blog1.png";
import {
  CalendarIcon,
  UserIcon,
} from "../../../../../../components/icons/icon";

const Blog = () => {
  return (
    <Stack gap={3} position="relative" mt={5}>
      <Flex
        align="center"
        justify="center"
        position="absolute"
        top={0}
        right="-10%"
        transform="translate(-50%,-50%)"
        color="#1C103B"
        bg="brand.yellow"
        w="105px"
        fontWeight={700}
        borderRadius="8px"
        h="40px"
      >
        TRAINING
      </Flex>
      <Box height="313px">
        <Image
          src={Blog1}
          h="100%"
          w="100%"
          objectFit="cover"
          alt="blog 1 image"
        />
      </Box>
      <Flex
        align="center"
        flexWrap="wrap"
        fontSize="16px"
        fontWeight={700}
        gap={4}
      >
        <Stack direction="row" align="center">
          <UserIcon />
          <Text>by Corabelle Durrad</Text>
        </Stack>
        <Stack direction="row" align="center">
          <CalendarIcon />
          <Text>02.01.2022</Text>
        </Stack>
      </Flex>
      <Text as="h3" fontSize="24px" fontWeight={700}>
        5 Crazy Things Dogs Do When Left Alone At Home
      </Text>
      <Text fontSize="18px">
        Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis
        feugiat vivamus.
      </Text>
    </Stack>
  );
};
export default Blog;
