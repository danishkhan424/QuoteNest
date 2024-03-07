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
} from "@chakra-ui/react";
import React from "react";

const SmallNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
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
          <Link _hover={{ textDecoration: "none" }} fontSize={"3xl"} href="#">
            QuoteNest
          </Link>
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
              alignItems={"center"}
              pt={20}
              letterSpacing={2}
              px={["10px", "20px", "40px"]}
              bg="blue.100"
              color={"blue.900"}
              fontWeight={"bold"}
              h={"100%"}
              w={"100%"}
              fontSize={"2xl"}
            >
              <Link href="/">Home</Link>
              <Link href="/generate">Generate</Link>
              <Link href="/about">About</Link>
              <Link href="/login">Login</Link>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default SmallNavbar;
