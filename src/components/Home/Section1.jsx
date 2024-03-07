import React from 'react'
import { Flex, Text } from "@chakra-ui/react";

const section1 = () => {
  return (
    <Flex
      h={"100vh"}
      direction={"column"}
      alignItems={"center"}
      textAlign={"center"}
      justifyContent={"center"}
    >
      <Text
        fontFamily={"Arial, Helvetica, sans-serif"}
        fontWeight={"900"}
        fontSize={["20px", "28px", "30px", "34px", "56px"]}
        px={[10,20,20, 40,]}
      >
        Quote Generator to Create Unique Quotes in Seconds
      </Text>
      <Text fontSize={["12px", "16px", "18px", "20px"]} px={[20,20,40]}>
        Looking for the perfect quote? Our AI Quote Generator provides a
        seamless experience in creating quotes that resonate and inspire.
        Generate quotes that stand out and make an impact.
      </Text>
    </Flex>
  );
}

export default section1