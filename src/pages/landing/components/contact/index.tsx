import { Box, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import ContactCard from "./components/contact-card";

const Contact = () => {
  return (
    <Box bg="brand.bgBlue" py="55px" mt={16}>
      <Stack
        fontFamily="Nunito Variable"
        mx={{ base: "2%", md: "5%", lg: "8%", xl: "10%" }}
      >
        <Text
          alignSelf="center"
          fontSize="16px"
          fontWeight={700}
          color="brand.blue"
        >
          OUR CONTACTS
        </Text>
        <Heading alignSelf="center" fontSize="46px" fontWeight={800}>
          Contacts
        </Heading>
        <Text alignSelf="center" fontSize="18px">
          Massa enim nec dui nunc mattis enim ut tellus
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6} mt={10}>
          <ContactCard />
          <ContactCard />
          <ContactCard />
          <ContactCard />
        </SimpleGrid>
      </Stack>
    </Box>
  );
};
export default Contact;
