import React from "react";
import { Box, Flex, Link, SimpleGrid, Text } from "@chakra-ui/react";

const FooterLinks = () => {
  return (
    <SimpleGrid
      columns={[2, 2, 4]}
      gap={10}
      maxWidth="100%"
      fontSize={["md", "lg", "lg"]}
      textAlign={["center", "left", "left"]}
    >
      <Flex flexDirection="column" gap={5}>
        <Text fontSize={["lg", "xl", "xl"]} fontWeight="bold">
          Navigation
        </Text>
        <Link href="">About Us</Link>
        <Link href="">Terms & Conditions</Link>
        <Link href="">Privacy Policy</Link>
        <Link href="">FAQ</Link> <Link href="">Contact</Link>
      </Flex>
      <Flex flexDirection="column" gap={5}>
        <Text fontSize={["lg", "xl", "xl"]} fontWeight="bold">
          Explore
        </Text>
        <Link href="">Blog</Link>
        <Link href="">Services</Link>
        <Link href="">Portfolio</Link>
        <Link href="">Testimonials</Link>
        <Link href="">Careers</Link>
      </Flex>
      <Flex flexDirection="column" gap={5}>
        <Text fontSize={["lg", "xl", "xl"]} fontWeight="bold">
          Media
        </Text>
        <Link href="">Press</Link> <Link href="">Events</Link>
        <Link href="">Partners</Link>
        <Link href="">Donate</Link>
        <Link href="">Volunteer</Link>
      </Flex>
      <Flex flexDirection="column" gap={5}>
        <Text fontSize={["lg", "xl", "xl"]} fontWeight="bold">
          Community
        </Text>
        <Link href="">Subscribe</Link>
        <Link href="">Support</Link>
        <Link href="">Feedback</Link>
        <Link href="">Community</Link>
        <Link href="">Resources</Link>
      </Flex>
    </SimpleGrid>
  );
};

export default FooterLinks;
