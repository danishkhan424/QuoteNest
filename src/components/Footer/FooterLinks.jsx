import React from "react";
import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

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
        <Link to="">About Us</Link>
        <Link to="">Terms & Conditions</Link>
        <Link to="">Privacy Policy</Link>
        <Link to="">FAQ</Link> <Link to="">Contact</Link>
      </Flex>
      <Flex flexDirection="column" gap={5}>
        <Text fontSize={["lg", "xl", "xl"]} fontWeight="bold">
          Explore
        </Text>
        <Link to="">Blog</Link>
        <Link to="">Services</Link>
        <Link to="">Portfolio</Link>
        <Link to="">Testimonials</Link>
        <Link to="">Careers</Link>
      </Flex>
      <Flex flexDirection="column" gap={5}>
        <Text fontSize={["lg", "xl", "xl"]} fontWeight="bold">
          Media
        </Text>
        <Link to="">Press</Link> <Link to="">Events</Link>
        <Link to="">Partners</Link>
        <Link to="">Donate</Link>
        <Link to="">Volunteer</Link>
      </Flex>
      <Flex flexDirection="column" gap={5}>
        <Text fontSize={["lg", "xl", "xl"]} fontWeight="bold">
          Community
        </Text>
        <Link to="">Subscribe</Link>
        <Link to="">Support</Link>
        <Link to="">Feedback</Link>
        <Link to="">Community</Link>
        <Link to="">Resources</Link>
      </Flex>
    </SimpleGrid>
  );
};

export default FooterLinks;
