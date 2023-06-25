import { Button, Flex, Icon, Image, Text, Box, Stack } from "@chakra-ui/react";
import { IoCart } from "react-icons/io5";

const MainNav = () => {
  return (
    <Flex justify="space-between" align="center" pt="10px">
      <Flex align="center" gap={2}>
        <Image w="77px" h="63px" src="/logo.png" alt="logo" />
        <Text
          color="brand.blue"
          fontSize="24px"
          fontWeight={800}
          lineHeight="18px"
        >
          Petopia
        </Text>
      </Flex>
      <Flex
        display={{ base: "none", lg: "flex" }}
        color="brand.dark"
        fontSize="16px"
        fontWeight={600}
        lineHeight="12px"
        justify="space-between"
        gap={14}
      >
        <Text>Home</Text>
        <Text>Services</Text>
        <Text>Shop</Text>
        <Text color="brand.yellow">Blog</Text>
        <Text color="brand.yellow">Pages</Text>
      </Flex>
      <Box>
        <Button bg="brand.white" borderRadius="8px" borderColor="brand.blue">
          <Stack direction="row" spacing={2}>
            <Icon color="brand.blue" as={IoCart} boxSize={5} />
            <Text fontSize="16px" fontWeight={700} lineHeight="19px">
              (1 item)
            </Text>
          </Stack>
        </Button>
      </Box>
    </Flex>
  );
};
export default MainNav;
