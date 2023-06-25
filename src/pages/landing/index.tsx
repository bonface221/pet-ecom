import { Box, Stack } from "@chakra-ui/react";
import Navbar from "../../components/navbar";
import Home from "./components/home";
import Accomplishments from "./components/accomplishments";
import Services from "./components/services";
import OurSpecials from "./components/our-specials";
import Products from "./components/products";
import Subscribe from "./components/subscribe";
import OurBlog from "./components/our-blog";
import Contact from "./components/contact";
import OtherPosts from "./components/other-posts";
import Footer from "../../components/footer";

const Landing = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Stack spacing={16} mx={{ base: "2%", md: "5%", lg: "8%", xl: "10%" }}>
        <Accomplishments />
        <Services />
        <OurSpecials />
        <Products />
        <Subscribe />
        <OurBlog />
      </Stack>
      <Contact />
      <OtherPosts />
      <Footer />
    </>
  );
};
export default Landing;
