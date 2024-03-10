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
  Link,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useLocation } from "react-router-dom";

const SmallNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isActive = (path) => {
    const location = useLocation();
    return location.pathname === path;
  };

  return (
    <Box className="smallNavbar">
      <Flex
        justifyContent={"space-between"}
        px={"20px"}
        py={"10px"}
        alignItems={"center"}
        bg="blue.100"
        color={"blue.900"}
        position={"sticky"}
        top={0}
        w={"100%"}
        h={"60px"}
      >
        <Heading size={["md", "lg", "xl"]}>
          <Text fontSize={"3xl"}>QuoteNest</Text>
        </Heading>
        <HamburgerIcon cursor={"pointer"} w={8} h={8} onClick={onOpen} />
      </Flex>
      <Drawer isOpen={isOpen} size={"full"} onClose={onClose}>
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
              <Link className={isActive("/") ? "active" : ""} href="/">
                Home
              </Link>
              <Link
                className={isActive("/generate") ? "active" : ""}
                href="/generate"
              >
                Generate
              </Link>
              <Link
                className={isActive("/about") ? "active" : ""}
                href="/about"
              >
                About
              </Link>
              <Link
                className={isActive("/signup") ? "active" : ""}
                href="/signup"
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
