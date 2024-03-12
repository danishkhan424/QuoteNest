import {
  Box,
  Heading,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import SmallNavbar from "./SmallNavbar";
import Loader from "../components/Loader";
import { useLocation, Link } from "react-router-dom";
const Navbar = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const screenSize = useBreakpointValue({ base: "base", md: "md" });

  const isActive = (path) => {
    const location = useLocation();
    return location.pathname === path;
  };

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
        <Link _hover={{ textDecoration: "none" }} to="#">
          QuoteNest
        </Link>
      </Heading>
      <Box
        display="flex"
        className="navLinks"
        justifyContent="space-evenly"
        alignItems={"center"}
        px={["10px", "20px", "40px"]}
        fontWeight={"bold"}
        w={"40%"}
        gap={5}
        fontSize={["sm", "md", "lg"]}
        letterSpacing={2}
      >
        <Link className={isActive("/") ? "active" : ""} to="/">
          Home
        </Link>
        <Link
          className={isActive("/generate") ? "active" : ""}
          to="/generate"
        >
          Generate
        </Link>
        <Link className={isActive("/about") ? "active" : ""} to="/about">
          About
        </Link>
        <Link _hover={{ textDecoration: "none" }} to="/signup">
          <Button
            fontSize={["sm", "md", "lg"]}
            colorScheme="blue.900"
            variant="outline"
            px={["10", "10", null]}
            size={["xs", "md", "lg"]}
            _hover={{ bg: "blue.900", color: "blue.100" }}
          >
            Sign up
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Navbar;
