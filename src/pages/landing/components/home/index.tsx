import { Box, Flex } from "@chakra-ui/react";
import MainNav from "../../../../components/navbar/main-nav";
import Hero from "./components/hero";

const Home = () => {
  return (
    <Box
      bgImage="url('/imgs/bg.png')"
      bgPos={{ base: "initial", lg: "center" }}
      bgRepeat="no-repeat"
      minH="80vh"
      mb={10}
    >
      <Flex
        mx={{ base: "2%", md: "5%", lg: "8%", xl: "10%" }}
        direction="column"
        h="100%"
      >
        <MainNav />
        <Box flex={1} mt={{ base: "6", lg: 0 }}>
          <Hero />
        </Box>
      </Flex>
    </Box>
  );
};
export default Home;
