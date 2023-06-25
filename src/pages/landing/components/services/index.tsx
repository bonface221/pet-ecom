import { Box, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import ServiceCard from "./components/service-card";
import { useContext } from "react";
import { petEcomContext } from "../../../../App";

const Services = () => {
  const data = useContext(petEcomContext);
  console.log(data);

  return (
    <Stack spacing={6}>
      <Text
        alignSelf="center"
        as="h3"
        color="brand.blue"
        fontSize="16px"
        fontWeight={700}
      >
        OUR SERVICES
      </Text>
      <Heading alignSelf="center">All Pet Care Services</Heading>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
        {[1, 2, 3, 4, 5, 6].map((item, i) => (
          <ServiceCard
            key={i}
            title="Walking & Sitting"
            description="Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae eget dolor morbi "
            price="$15 / hour"
          />
        ))}
      </SimpleGrid>
    </Stack>
  );
};
export default Services;
