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
import { AuthContext } from "./authProvider/AuthContextProvider";

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
    });
  }, []);

  const { email, password } = state;

  return (
    <Flex h={"100vh"} w={"100vw"} justifyContent="center" alignItems="center">
      <form onSubmit={handleSubmit}>
        <FormControl textAlign={"center"} minW={"380px"} maxW="30%" zIndex={3}>
          <VStack gap={10}>
            <InputGroup size="md" colorScheme="cyan" color="blue.800">
              <InputLeftElement pointerEvents="none">
                <EmailIcon fontSize={"20px"} />
              </InputLeftElement>
              <Input
                type="email"
                isInvalid
                focusBorderColor="blue.800"
                errorBorderColor="blue.800"
                value={email}
                onChange={(e) =>
                  dispatch({ type: "email", payload: e.target.value })
                }
                variant="flushed"
                _placeholder={{ color: "blue.800" }}
                placeholder="Enter email"
              />
            </InputGroup>
            <InputGroup color="blue.800" size="md">
              <InputLeftElement>
                <LockIcon fontSize={"20px"} />
              </InputLeftElement>
              <Input
                value={password}
                variant="flushed"
                isInvalid
                focusBorderColor="blue.800"
                errorBorderColor="blue.800"
                onChange={(e) =>
                  dispatch({ type: "password", payload: e.target.value })
                }
                pr="4.5rem"
                _placeholder={{ color: "blue.800" }}
                type={show ? "text" : "password"}
                placeholder="Enter password"
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  _hover={{ bg: "blue.100", color: "blue.800" }}
                  onClick={() => setShow(!show)}
                  bg={"blue.800"}
                  color={"blue.100"}
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

      {/* ************************************************************* */}
      <div class="blueFirst">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div class="blueSecond">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div class="blueThird">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div class="blueFour">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </Flex>
  );
};

export default Login;

/*

*/
