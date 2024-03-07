import {  Box, Heading, Link} from "@chakra-ui/react";
import React from "react";
import FooterLinks from "./FooterLinks";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <Box
      bg="blue.100"
      px={["20px", "40px", "80px"]}
      py={10}
      color={"blue.900"}
      maxWidth="100%"
      margin="auto"
    >
      <Heading size={["md", "lg", "xl"]}>
        <Link href="#">QuoteNest</Link>
      </Heading>
      <FooterLinks />
      <SocialLinks />
      <Box fontSize={"sm"}>
        &copy; 2024 Your Website Name. All rights reserved.
      </Box>
    </Box>
  );
};

export default Footer;
{
  /* 
<div style={{ textAlign: "center" }}>
  <div style={{ display: "inline-block", marginRight: "20px" }}>
    <h4>Navigation</h4>
    <a href="/about">About Us</a> |{" "}
    <a href="/terms">Terms & Conditions</a> |{" "}
    <a href="/privacy">Privacy Policy</a> | <a href="/faq">FAQ</a> |{" "}
    <a href="/contact">Contact</a>
  </div>
  <div style={{ display: "inline-block", marginRight: "20px" }}>
    <h4>Explore</h4>
    <a href="/blog">Blog</a> | <a href="/services">Services</a> |{" "}
    <a href="/portfolio">Portfolio</a> |{" "}
    <a href="/testimonials">Testimonials</a> |{" "}
    <a href="/careers">Careers</a>
  </div>
  <div style={{ display: "inline-block", marginRight: "20px" }}>
    <h4>Media</h4>
    <a href="/press">Press</a> | <a href="/events">Events</a> |{" "}
    <a href="/partners">Partners</a> | <a href="/donate">Donate</a> |{" "}
    <a href="/volunteer">Volunteer</a>
  </div>
  <div style={{ display: "inline-block" }}>
    <h4>Community</h4>
    <a href="/subscribe">Subscribe</a> | <a href="/support">Support</a> |{" "}
    <a href="/feedback">Feedback</a> | <a href="/community">Community</a>{" "}
    | <a href="/resources">Resources</a> | <a href="/sitemap">Sitemap</a>
  </div>
</div>
<div style={{ textAlign: "center", marginTop: "20px" }}>
  <a
    href="https://facebook.com/yourpage"
    target="_blank"
    rel="noopener noreferrer"
  >
    Facebook
  </a>{" "}
  |
  <a
    href="https://twitter.com/yourpage"
    target="_blank"
    rel="noopener noreferrer"
  >
    Twitter
  </a>{" "}
  |
  <a
    href="https://instagram.com/yourpage"
    target="_blank"
    rel="noopener noreferrer"
  >
    Instagram
  </a>{" "}
  |
  <a
    href="https://linkedin.com/yourpage"
    target="_blank"
    rel="noopener noreferrer"
  >
    LinkedIn
  </a>
</div>

<div>&copy; 2024 Your Website Name. All rights reserved.</div> */
}
