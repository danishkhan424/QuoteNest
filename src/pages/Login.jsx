import React, { useState } from "react";
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  InputLeftElement,
  Flex,
  FormControl,
  FormLabel,
  VStack,
} from "@chakra-ui/react";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";
const Login = () => {
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
  };

  

  return (
    <Flex h={"100vh"} w={"100vw"} justifyContent="center" alignItems="center">
      <form
        onSubmit={handleSubmit}
      >
        <FormControl
          textAlign={"center"}
          minW={"380px"}
          maxW="30%"
        >
          <VStack gap={10}>
            <InputGroup size="md" colorScheme="cyan">
              <InputLeftElement pointerEvents="none">
                <EmailIcon fontSize={"20px"} color="blue.400" />
              </InputLeftElement>
              <Input
                type="email"
                // value={""}
                variant="flushed"
                placeholder="Enter email"
              />
            </InputGroup>
            <InputGroup>
              <InputLeftElement>
                <LockIcon fontSize={"20px"} color="blue.400" />
              </InputLeftElement>
              <Input
                // value={""}
                variant="flushed"
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  _hover={{ bg: "blue.800", color: "blue.100" }}
                  onClick={() => setShow(!show)}
                  bg={"blue.200"}
                  color={"blue.800"}
                >
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </VStack>
          <Button
            type="submit"
            w={"100%"}
            mt={10}
            colorScheme="blue.900"
            variant="outline"
            _hover={{ bg: "blue.800", color: "blue.200" }}
            bg={"blue.100"}
          >
            Login
          </Button>
        </FormControl>
      </form>
    </Flex>
  );
};

export default Login;

/*

*/
