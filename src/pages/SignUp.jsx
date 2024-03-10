import React, { useEffect, useReducer, useState } from "react";
import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  InputLeftElement,
  Flex,
  FormControl,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const initialState = {
  userEmail: "",
  userPassword: "",
};
function reducer(state, { type, payload }) {
  switch (type) {
    case "email": {
      return {
        ...state,
        userEmail: payload,
      };
    }
    case "password": {
      return {
        ...state,
        userPassword: payload,
      };
    }
  }
}

const SignUp = () => {
  const [show, setShow] = useState(false);
  const toast = useToast()
    const [state, dispatch] = useReducer(reducer, initialState);
    const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
      localStorage.setItem("user", JSON.stringify(state));
      navigate("/login")
  };

  useEffect(() => {
    toast({
      title: "User Not Found.",
      description: "Please Register first.",
      position: "top",
      status: "info",
      duration: 3000,
      isClosable: true,
    })
  },[])

  const { userEmail, userPassword } = state;

  return (
    <Flex h={"100vh"} w={"100vw"} justifyContent="center" alignItems="center">
      <form onSubmit={handleSubmit}>
        <FormControl textAlign={"center"} minW={"380px"} maxW="30%">
          <VStack gap={10}>
            <InputGroup size="md" colorScheme="cyan">
              <InputLeftElement pointerEvents="none">
                <EmailIcon fontSize={"20px"} color="blue.400" />
              </InputLeftElement>
              <Input
                type="email"
                onChange={(e) =>
                  dispatch({ type: "email", payload: e.target.value })
                }
                value={userEmail}
                variant="flushed"
                placeholder="Enter email"
                isRequired
              />
            </InputGroup>
            <InputGroup>
              <InputLeftElement>
                <LockIcon fontSize={"20px"} color="blue.400" />
              </InputLeftElement>
              <Input
                value={userPassword}
                onChange={(e) =>
                  dispatch({ type: "password", payload: e.target.value })
                }
                variant="flushed"
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Create password"
                isRequired
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
            Sign Up
          </Button>
        </FormControl>
      </form>
    </Flex>
  );
};

export default SignUp;
