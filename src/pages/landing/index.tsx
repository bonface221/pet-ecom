import { Stack } from "@chakra-ui/react";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Accomplishments from "./components/accomplishments";
import Contact from "./components/contact";
import Home from "./components/home";
import OtherPosts from "./components/other-posts";
import OurBlog from "./components/our-blog";
import OurSpecials from "./components/our-specials";
import Products from "./components/products";
import Services from "./components/services";
import Subscribe from "./components/subscribe";

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
