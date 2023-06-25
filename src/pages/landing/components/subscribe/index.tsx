import {
  Box,
  Button,
  Heading,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import SubscribeLeft from "/imgs/subscribe-left.png";
import SubscribeLeftDog from "/imgs/subscribe-left-dog.png";
import SubscribeRight from "/imgs/subscribe-right.png";
import SubscribeRightDog from "/imgs/subscribe-right-dog.png";

const Subscribe = () => {
  return (
    <Box
      bgImage="/imgs/subscribe.png"
      bgPos="top"
      h="500px"
      position="relative"
      bgRepeat="no-repeat"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Stack
        color="white"
        w={{ base: "90%", md: "60%" }}
        align="center"
        gap={6}
        zIndex={999}
      >
        <Heading
          fontSize={{ base: "25px", md: "30px", lg: "46px" }}
          fontFamily="Nunito Variable"
          fontWeight={800}
        >
          Get 20% Off Your First Purchase When You Use Petco Credit Card
        </Heading>
        <Text fontSize={{ base: "15px", md: "18px" }}>
          Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum.
          Ligula ullamcorper malesuada proin libero nunc consequat interdum
          varius sit.
        </Text>
        <Stack direction={{ base: "column", md: "row" }} spacing={5}>
          <Input
            width="319px"
            height="60px"
            border="1px solid #CDCCCE"
            placeholder="Type our Email"
            bg="transparent"
            size="lg"
            _placeholder={{
              color: "white",
            }}
          />
          <Button
            height="60px"
            bg="brand.yellow"
            color="brand.dark"
            borderRadius="8px"
          >
            Subscribe
          </Button>
        </Stack>
      </Stack>

      <>
        <Box
          position="absolute"
          display={{ base: "none", md: "block" }}
          bottom={0}
          left={0}
        >
          <Image src={SubscribeLeft} alt="subscribe left image" />
        </Box>
        <Box
          position="absolute"
          bottom={0}
          display={{ base: "none", md: "block" }}
          left="-10%"
        >
          <Image
            width="350px"
            height="300px"
            src={SubscribeLeftDog}
            alt="subscribe left image"
          />
        </Box>
        <Box
          display={{ base: "none", md: "block" }}
          position="absolute"
          bottom={0}
          right={0}
        >
          <Image src={SubscribeRight} alt="subscribe right image" />
        </Box>
        <Box
          position="absolute"
          bottom={10}
          right={0}
          display={{ base: "none", md: "block" }}
        >
          <Image
            boxSize="250px"
            src={SubscribeRightDog}
            alt="subscribe right image"
          />
        </Box>
      </>
    </Box>
  );
};
export default Subscribe;
