import {
  Box,
  Divider,
  Flex,
  Icon,
  IconButton,
  Image,
  Input,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import FooterImage1 from "/imgs/footer-img1.png";
import {
  FaPhoneAlt,
  FaCircle,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";

const Footer = () => {
  return (
    <Stack spacing={4} bg="#F8F8F8" pt="115px" pb="20px">
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 4 }}
        mx="10%"
        pb="10px"
        spacing={7}
      >
        <Stack spacing={4}>
          <Image w="95px" h="53px" src={FooterImage1} alt="footer image 1" />
          <Text fontSize="16px">
            Tristique nulla aliquet enim tortor at auctor urna nunc. Massa enim
            nec dui nunc mattis enim ut tellus. Sed ut perspiciatis unde ...
          </Text>
          <Stack direction="row" spacing={4} align="center">
            <Icon as={FaPhoneAlt} color="brand.blue" boxSize={8} />
            <Stack>
              <Text fontSize="16px" fontWeight={800}>
                (913) 756-3126
              </Text>
              <Text fontSize="16px">Got Questions? Call us 24/7</Text>
            </Stack>
          </Stack>
        </Stack>
        <Stack>
          <Text fontSize="24px" fontWeight={800} color="brand.blue">
            Working Hours
          </Text>

          <Stack bg="brand.white" fontSize="18px" p={4}>
            <Flex justify="space-between">
              <Text>Mon-Fri</Text>
              <Text fontWeight={700}>7am-6pm</Text>
            </Flex>
            <Flex justify="space-between">
              <Text>Saturday</Text>
              <Text fontWeight={700}>9am-4pm</Text>
            </Flex>
            <Flex justify="space-between">
              <Text>Sunday</Text>
              <Text fontWeight={700}>Closed</Text>
            </Flex>
          </Stack>
        </Stack>
        <Stack align={{ base: "start", lg: "center" }}>
          <Text fontSize="24px" fontWeight={800} color="brand.blue">
            Useful Links
          </Text>
          <Flex gap={4}>
            <Stack>
              <List spacing={3}>
                <ListItem display="flex" alignItems="center">
                  <ListIcon as={FaCircle} boxSize={2} color="red.200" />
                  <Text>Home</Text>
                </ListItem>
                <ListItem display="flex" alignItems="center">
                  <ListIcon as={FaCircle} boxSize={2} color="red.200" />
                  About
                </ListItem>
                <ListItem display="flex" alignItems="center">
                  <ListIcon as={FaCircle} boxSize={2} color="red.200" />
                  Services
                </ListItem>
                <ListItem display="flex" alignItems="center">
                  <ListIcon as={FaCircle} boxSize={2} color="red.200" />
                  shop
                </ListItem>
              </List>
            </Stack>
            <Stack>
              <List spacing={3}>
                <ListItem display="flex" alignItems="center">
                  <ListIcon as={FaCircle} boxSize={2} color="red.200" />
                  FAQ
                </ListItem>
                <ListItem display="flex" alignItems="center">
                  <ListIcon as={FaCircle} boxSize={2} color="red.200" />
                  Gallery
                </ListItem>
                <ListItem display="flex" alignItems="center">
                  <ListIcon as={FaCircle} boxSize={2} color="red.200" />
                  Delivery
                </ListItem>
                <ListItem display="flex" alignItems="center">
                  <ListIcon as={FaCircle} boxSize={2} color="red.200" />
                  Sales
                </ListItem>
              </List>
            </Stack>
          </Flex>
        </Stack>
        <Stack spacing={4}>
          <Text fontSize="24px" fontWeight={800} color="brand.blue">
            Newsletter
          </Text>
          <Text>
            Be first in the queue! Get our latest news straight to your inbox.
          </Text>
          <Flex gap={3}>
            <Input placeholder="Email" bg="brand.white" />
            <IconButton
              colorScheme="blue"
              aria-label=""
              icon={<AiOutlineArrowRight />}
            />
          </Flex>
          <Flex gap={3} color="brand.blue">
            <Icon as={FaFacebookF} boxSize={5} />
            <Icon as={FaInstagram} boxSize={5} />
            <Icon as={FaTwitter} boxSize={5} />
            <Icon as={FaWhatsapp} boxSize={5} />
          </Flex>
        </Stack>
      </SimpleGrid>
      <Divider />
      <Flex justify="center" py={5} align="center">
        NOOT © All rights reserved Copyrights 2023
      </Flex>
    </Stack>
  );
};
export default Footer;
