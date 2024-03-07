import { Box, Heading, Link, Button, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import SmallNavbar from "./SmallNavbar";

const Navbar = () => {
  const screenSize = useBreakpointValue({ base: "base", md: "md" });
  return screenSize === "base" ? (
    <SmallNavbar />
  ) : (
    <Box
      className="navbar"
      display="flex"
      justifyContent="space-between"
      alignItems={"center"}
      py={3}
      px={["20px", "30px", "80px"]}
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
        justifyContent="space-between"
        alignItems={"center"}
        px={["10px", "20px", "40px"]}
        fontWeight={"bold"}
        w={"50%"}
        gap={5}
        fontSize={["sm", "md", "lg"]}
        letterSpacing={2}
      >
        <Link href="/">Home</Link>
        <Link href="/generate">Generate</Link>
        <Link href="/about">About</Link>
        <Button
          colorScheme="blue.900"
          variant="outline"
          size={["sm", "md", "lg"]}
          _hover={{ bg: "blue.900", color: "blue.100" }}
        >
          <Link _hover={{ textDecoration: "none" }} href="/login">
            Login
          </Link>
        </Button>
      </Box>
    </Box>
  );
};

export default Navbar;
