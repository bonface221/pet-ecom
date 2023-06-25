import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { GoArrowRight } from "react-icons/go";
import ServicesDog from "/imgs/services-dog.png";
import LuxuryPet from "/imgs/luxury-pet.png";

const OurSpecials = () => {
  return (
    <Box mb={10}>
      <Grid
        templateRows={{ base: "repeat(3, 1fr)", md: "repeat(2, 1fr)" }}
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
        gap={4}
        rowGap={8}
        minH="500px"
      >
        <GridItem
          colSpan={{ base: 1, md: 2 }}
          rowSpan={{ base: 1, md: 2 }}
          bg="#FCDCB5"
          p={{ base: "40px 20px", md: "70px 62px" }}
        >
          <Stack height="100%">
            <Box alignSelf={{ base: "start", md: "flex-end" }}>
              <Button
                bg="brand.blue"
                color="brand.white"
                borderRadius="8px"
                fontSize="24px"
                fontWeight={800}
                lineHeight="30px"
                _hover={{ bg: "brand.white", color: "brand.blue" }}
              >
                Up to 40% Off
              </Button>
            </Box>

            <Flex
              flex={1}
              h="100%"
              align="center"
              direction={{ base: "column", sm: "row" }}
            >
              <Stack flex={1} gap={4}>
                <Heading
                  fontSize="46px"
                  fontWeight="800"
                  fontFamily="Nunito Variable"
                >
                  Сheck Out Our Specials
                </Heading>
                <Text fontSize="16px">
                  Massa placerat duis ultricies lacus. Aliquet bibendum enim
                  facilisis gravida neque convallis
                </Text>
                <Flex color="brand.blue" fontSize="20px" fontWeight={800}>
                  <Text>Shop Now </Text>
                  <Icon as={GoArrowRight} boxSize={6} />
                </Flex>
              </Stack>
              <Box flex={1}>
                <Image src={ServicesDog} alt="dog" />
              </Box>
            </Flex>
          </Stack>
        </GridItem>
        <GridItem colSpan={1} rowSpan={1} bg="#FFDA47" position="relative">
          <Stack
            p="23px"
            h="100%"
            gap={4}
            justify="center"
            w={{ base: "100%", md: "60%" }}
          >
            <Heading
              fontSize="25px"
              fontWeight={800}
              fontFamily="Nunito Variable"
            >
              Luxury Fashion Collection
            </Heading>
            <Flex color="brand.blue" fontSize="20px" fontWeight={800}>
              <Text>Shop Now </Text>
              <Icon as={GoArrowRight} boxSize={6} />
            </Flex>
          </Stack>
          <Box
            display={{ base: "none", md: "block" }}
            position="absolute"
            right={{ base: 0, md: -10 }}
            top={{ base: 0, md: -2.5 }}
            h="100%"
          >
            <Image w="100%" h="100%" src={LuxuryPet} alt="luxury pet" />
          </Box>
        </GridItem>
        <GridItem colSpan={1} rowSpan={1} bg="#FFDA47" position="relative">
          <Stack
            p="23px"
            h="100%"
            gap={4}
            justify="center"
            w={{ base: "100%", md: "60%" }}
          >
            <Heading
              fontSize="25px"
              fontWeight={800}
              fontFamily="Nunito Variable"
            >
              Luxury Fashion Collection
            </Heading>
            <Flex color="brand.blue" fontSize="20px" fontWeight={800}>
              <Text>Shop Now </Text>
              <Icon as={GoArrowRight} boxSize={6} />
            </Flex>
          </Stack>
          <Box
            position="absolute"
            display={{ base: "none", md: "block" }}
            right={{ base: 0, md: -10 }}
            top={{ base: 0, md: -2.5 }}
            bottom={0}
            height="100%"
          >
            <Image w="100%" h="100%" src={LuxuryPet} alt="luxury pet" />
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};
export default OurSpecials;
