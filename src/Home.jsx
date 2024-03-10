import React from "react";
import Slider from "react-slick";
import { Box } from "@chakra-ui/react";
import Section1 from "./components/Home/Section1";
import Section2 from "./components/Home/Section2";
import Section3 from "./components/Home/Section3";

function Home() {
  return (
    <>
      <Box>
        <Section1 />
        <Section2 />
        <Section3 />
      </Box>
    </>
  );
}

export default Home;
