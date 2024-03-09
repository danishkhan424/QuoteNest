import {
  Box,
  Heading,
  Link,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import SmallNavbar from "./SmallNavbar";
import Loader from "../components/Loader";
const Navbar = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const screenSize = useBreakpointValue({ base: "base", md: "md" });
  return isLoading ? (
    <Loader />
  ) : screenSize === "base" ? (
    <SmallNavbar />
  ) : (
    <Box
      className="navbar"
      display="flex"
      justifyContent="space-between"
      alignItems={"center"}
      py={3}
      px={["20px", "30px", "60px"]}
      bg="blue.100"
      color={"blue.900"}
      position={"sticky"}
      top={0}
      zIndex={10}
    >
      <Heading size={["md", "lg", "xl"]}>
        <Link _hover={{ textDecoration: "none" }} href="#">
          QuoteNest
        </Link>
      </Heading>
      <Box
        display="flex"
        justifyContent="space-evenly"
        alignItems={"center"}
        px={["10px", "20px", "40px"]}
        fontWeight={"bold"}
        w={"40%"}
        gap={5}
        fontSize={["sm", "md", "lg"]}
        letterSpacing={2}
      >
        <Link href="/">Home</Link>
        <Link href="/generate">Generate</Link>
        <Link href="/about">About</Link>
        <Button
          fontSize={["sm", "md", "lg"]}
          colorScheme="blue.900"
          variant="outline"
          px={["10", "10", "10"]}
          size={["xs", "md", "lg"]}
          _hover={{ bg: "blue.900", color: "blue.100" }}
        >
          <Link _hover={{ textDecoration: "none" }} href="/signup">
            Sign up
          </Link>
        </Button>
      </Box>
    </Box>
  );
};

export default Navbar;
