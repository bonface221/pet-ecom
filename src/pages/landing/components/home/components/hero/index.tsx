import {
  Box,
  Flex,
  Heading,
  IconButton,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { TrustIcon } from "./../../../../../../components/icons/icon";
import Dog from "/imgs/dog.png";

const Hero = () => {
  return (
    <Flex h="100%">
      <SimpleGrid columns={{ base: 1, lg: 2 }}>
        <Stack justify="center" spacing={5}>
          <Text
            color="brand.blue"
            textTransform="capitalize"
            fontSize="16px"
            fontWeight={700}
          >
            WE CARE FOR YOUR PETS
          </Text>
          <Heading
            fontSize={{ base: "35px", md: "45px", lg: "68px" }}
            fontWeight={900}
            lineHeight={{ base: "40px", md: "50px", lg: "71px" }}
            fontFamily="nunito"
          >
            We Help You Care for Animals with Nutrition
          </Heading>
          <Text fontSize="18px" lineHeight="26px">
            All offers are subject to availability. Ut tortor pretium viverra
            suspendisse potenti nullam ac tortor vitae. Consectetur a erat nam
            at. Potenti nullam ac tortor vitae purus faucibus ornare.
          </Text>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3}>
            {[1, 2, 3, 4].map((i) => (
              <Stack direction="row" key={i} gap={2} align="center">
                <IconButton
                  boxSize="60px"
                  borderRadius="8px"
                  bg="brand.bgBlue"
                  border="2px solid #EBE5F7"
                  aria-label="shipping fast Icon"
                  icon={<TrustIcon boxSize={6} />}
                />

                <Stack color="brand.dark" gap={0}>
                  <Text as="h3" fontSize="22px" fontWeight={700}>
                    Trust & Safety
                  </Text>
                  <Text fontSize="14px">Velit euismod pellentes</Text>
                  Tt
                </Stack>
              </Stack>
            ))}
          </SimpleGrid>
        </Stack>
        <Box>
          <Image src={Dog} alt="dog" />
        </Box>
      </SimpleGrid>
    </Flex>
  );
};
export default Hero;
