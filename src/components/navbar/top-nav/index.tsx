import { Box, Flex, Icon, Stack, Text } from "@chakra-ui/react";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";

import { IoMdMail } from "react-icons/io";

const TopNav = () => {
  return (
    <Box bg="brand.blue" minH="42px" color="brand.white">
      <Flex
        pt={3}
        mx={{ base: "2%", md: "5%", lg: "8%", xl: "10%" }}
        justify="space-between"
        align="center"
        h="100%"
        flexWrap="wrap"
        fontSize="15px"
        gap={2}
      >
        <Flex gap={1}>
          <Icon as={FaFacebookF} boxSize={4} />
          <Icon as={FaInstagram} boxSize={4} />
          <Icon as={FaTwitter} boxSize={4} />
          <Icon as={FaWhatsapp} boxSize={4} />
        </Flex>
        <Stack direction="row" spacing={{ base: 3, md: 10 }}>
          <Flex gap={2} align="center">
            <Icon as={FaPhoneAlt} boxSize={4} />
            <Text>0000 - 123456789</Text>
          </Flex>
          <Flex gap={2} align="center">
            <Icon as={IoMdMail} boxSize={4} />
            <Text>info@example.com</Text>
          </Flex>
        </Stack>
      </Flex>
    </Box>
  );
};
export default TopNav;
