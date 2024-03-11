import { Box, CircularProgress, Flex } from "@chakra-ui/react";
import React from "react";

const Loader = () => {
  return (
    <Flex 
    justifyContent="center" alignItems="center" h="100vh" w="100%"
    >
      <Box
      className="loader"
      >

      </Box>
      {/* <CircularProgress
        isIndeterminate
        size="80px"
        color="blue.800"
        thickness="5px"
      /> */}
    </Flex>
  );
};

export default Loader;
