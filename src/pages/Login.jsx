import React, { useContext, useEffect, useReducer, useState } from "react";
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
  useToast,
} from "@chakra-ui/react";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthContextProvider";

const initialState = {
  email: "",
  password: "",
};
function reducer(state, { type, payload }) {
  switch (type) {
    case "email": {
      return {
        ...state,
        email: payload,
      };
    }
    case "password": {
      return {
        ...state,
        password: payload,
      };
    }
  }
}

const Login = () => {
  const [show, setShow] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AuthContext);
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(toast);
    const user = localStorage.getItem("user") || {};
    if (user) {
      const userData = JSON.parse(user);
      if (
        userData.userEmail === state.email &&
        userData.userPassword === state.password
      ) {
        setIsLoggedIn(true);
        // login sucessfull
        toast({
          title: "Login Successful.",
          description: "You have been successfully logged in.",
          status: "success",
          position: "top",
          varient: "top-accent",
          duration: 4000,
          isClosable: true,
        });
        navigate("/generate");
        localStorage.removeItem("user");
      } else {
        // login failed
        toast({
          title: "Login Failed",
          description: "Invalid email or password. Please try again.",
          status: "error",
          position: "top",
          varient: "top-accent",
          duration: 5000,
          isClosable: true,
        });
      }
    } else {
      // login failed
      toast({
        title: "Login Failed",
        description: "Invalid email or password. Please try again.",
        status: "error",
        position: "top",
        varient: "top-accent",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    toast({
      title: "Account has been created.",
      description: "Please Login.",
      position: "top",
      status: "success",
      duration: 3000,
      isClosable: true,
    })
  },[])
  
  const { email, password } = state;

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
                value={email}
                onChange={(e) =>
                  dispatch({ type: "email", payload: e.target.value })
                }
                variant="flushed"
                placeholder="Enter email"
              />
            </InputGroup>
            <InputGroup>
              <InputLeftElement>
                <LockIcon fontSize={"20px"} color="blue.400" />
              </InputLeftElement>
              <Input
                value={password}
                variant="flushed"
                onChange={(e) =>
                  dispatch({ type: "password", payload: e.target.value })
                }
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
