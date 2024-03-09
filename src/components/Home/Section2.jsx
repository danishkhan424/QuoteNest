import React from "react";
import { Flex, Text } from "@chakra-ui/react";

const section2 = () => {
  return (
    <Flex
      className="Section1"
      h={["30vh","30vh", "40vh", "60vh", "80vh"]}
      direction={"column"}
      alignItems={"center"}
      textAlign={"center"}
      justifyContent={"center"}
    >
      <Text
        fontFamily={"Arial, Helvetica, sans-serif"}
        fontWeight={"900"}
        fontSize={["20px", "22px", "30px", "34px", "56px"]}
        px={[10, 20, 20, 40]}
      >
        QuoteNest, to Create Unique Quotes in Seconds
      </Text>
      <Text fontSize={["12px", "12px", "18px", "20px"]} px={[20, 20, 40]}>
        Looking for the perfect quote? Our AI Quote Generator provides a
        seamless experience in creating quotes that resonate and inspire.
        Generate quotes that stand out and make an impact.
      </Text>
    </Flex>
  );
};

export default section2;
