import { Box, Flex, Icon, Image, Stack, Text } from "@chakra-ui/react";
import { GoArrowRight } from "react-icons/go";
import { WalkingIcon } from "../../../../../../components/icons/icon";
import Paws from "/imgs/paws.png";

const ServiceCard = ({ title, description, price }: any) => {
  return (
    <Stack
      position="relative"
      borderRadius="8px"
      border=" 2px solid #EBE5F7"
      bg="brand.white"
      _hover={{
        bg: "brand.blue",
        color: "brand.white",
      }}
      p="35px 40px"
      gap={3}
    >
      <Flex gap={3} align="center">
        <WalkingIcon boxSize="50px" />
        <Text fontSize="24px" fontWeight={800}>
          {title}
        </Text>
      </Flex>
      <Text fontSize="18px">{description}</Text>
      <Text fontSize="18px" fontWeight={700}>
        From {price}
      </Text>
      <Flex color="brand.blue" align="center" gap={1}>
        <Text fontSize="20px" fontWeight={800}>
          Get Service
        </Text>
        <Icon as={GoArrowRight} boxSize={6} />
      </Flex>
      <Box position="absolute" right={0} bottom={0}>
        <Image src={Paws} alt="paws" />
      </Box>
    </Stack>
  );
};
export default ServiceCard;
