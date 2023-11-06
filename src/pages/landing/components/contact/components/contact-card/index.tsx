import { Box, Icon, Stack, Text } from "@chakra-ui/react";
import { FaPhoneAlt } from "react-icons/fa";

const ContactCard = () => {
  return (
    <Stack
      py="40px"
      position="relative"
      borderRadius="8px"
      border="2px solid #7C58D3"
      bg="brand.white"
      align="center"
      height="200px"
      justify="center"
    >
      <Box
        position="absolute"
        top={0}
        left="50%"
        transform="translate(-50%,-50%)"
      >
        <Box bg="#EBE5F7" p="20px" borderRadius="80px">
          <Icon as={FaPhoneAlt} color="brand.blue" fontSize="32px" />
        </Box>
      </Box>
      <Text as="h3" fontSize="22px" fontWeight={700}>
        Phone
      </Text>
      <Text fontSize="18px">(913) 756-3126</Text>
      <Text fontSize="18px"> (921) 557-1203</Text>
    </Stack>
  );
};
export default ContactCard;
