import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import Projects from "/imgs/projects.png";
import { SatisfiedClientsIcon } from "../../../../components/icons/icon";

const Accomplishments = () => {
  return (
    <Box
      bgImage={Projects}
      minH="200px"
      bgRepeat="no-repeat"
      bgSize="cover"
      py={4}
    >
      <Flex
        flexWrap="wrap"
        justifyContent="space-between"
        align="center"
        h="100%"
        mx="60px"
      >
        {["1", "2", "3", "4"].map((item, i) => (
          <Stack
            key={i}
            direction="row"
            align="center"
            color="brand.white"
            gap={4}
          >
            <SatisfiedClientsIcon boxSize="60px" />
            <Stack>
              <Text fontSize="46px" fontWeight={800}>
                120+
              </Text>
              <Text fontSize="18pxpx" fontWeight={500}>
                Sutisfide Cliens
              </Text>
            </Stack>
          </Stack>
        ))}
      </Flex>
    </Box>
  );
};
export default Accomplishments;
