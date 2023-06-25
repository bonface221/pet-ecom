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
        {data?.PetServices.map((item, i) => (
          <ServiceCard
            key={i}
            title={item.name}
            description={item.description}
            price={item.price}
          />
        ))}
      </SimpleGrid>
    </Stack>
  );
};
export default Services;
