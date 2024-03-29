import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useLocation, Link } from "react-router-dom";

const SmallNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isActive = (path) => {
    const location = useLocation();
    return location.pathname === path;
  };

  return (
    <Box className="smallNavbar" position={"sticky"} top={0} zIndex={10}>
      <Flex
        justifyContent={"space-between"}
        px={"20px"}
        py={"10px"}
        alignItems={"center"}
        bg="blue.100"
        color={"blue.900"}
        top={0}
        w={"100%"}
        h={"60px"}
      >
        <Heading size={["md", "lg", "xl"]}>
          <Text fontSize={"3xl"}>QuoteNest</Text>
        </Heading>
        <HamburgerIcon cursor={"pointer"} w={8} h={8} onClick={onOpen} />
      </Flex>
      <Drawer isOpen={isOpen} size={["xs", "md", "lg"]} onClose={onClose}>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader fontWeight={"bold"} fontSize={"3xl"} color={"blue.900"}>
            QuoteNest
          </DrawerHeader>

          <DrawerBody>
            <Flex
              direction="column"
              gap={10}
              className="navLinks"
              alignItems={"center"}
              pt={20}
              letterSpacing={2}
              px={["10px", "20px", "40px"]}
              bg="blue.100"
              color={"blue.900"}
              fontWeight={"bold"}
              h={"100%"}
              w={"100%"}
              fontSize={"xl"}
            >
              <Link
                className={isActive("/") ? "active" : ""}
                onClick={onClose}
                to="/"
              >
                Home
              </Link>
              <Link
                onClick={onClose}
                className={isActive("/generate") ? "active" : ""}
                to="/generate"
              >
                Generate
              </Link>
              <Link
                onClick={onClose}
                className={isActive("/about") ? "active" : ""}
                to="/about"
              >
                About
              </Link>
              <Link
                className={isActive("/signup") ? "active" : ""}
                onClick={onClose}
                to="/signup"
              >
                Sign Up
              </Link>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default SmallNavbar;
