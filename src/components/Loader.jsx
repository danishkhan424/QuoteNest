import { CircularProgress, Flex } from "@chakra-ui/react";
import React from "react";

const Loader = () => {
  return (
    <Flex justifyContent="center" alignItems="center" h="100vh" w="100%">
      <CircularProgress isIndeterminate size="80px" thickness="5px" />
    </Flex>
  );
};

export default Loader;
