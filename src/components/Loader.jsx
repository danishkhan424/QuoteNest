import {  CircularProgress, Flex } from '@chakra-ui/react'
import React from 'react'

const Loader = () => {
  return (
    <Flex   justifyContent="center" alignItems="center" h="100vh" >
      <CircularProgress isIndeterminate size="120px" />
    </Flex>
  );
}

export default Loader