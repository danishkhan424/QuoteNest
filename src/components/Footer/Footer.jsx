import { Box, Heading, Image, Link } from "@chakra-ui/react";
import React from "react";
import FooterLinks from "./FooterLinks";
import SocialLinks from "./SocialLinks";
import heartIcon from "../../assets/heart.png";

const Footer = () => {
  return (
    <Box>
      <div className="quoteSecond">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <Box
        bg="blue.100"
        px={["20px", "40px", "80px"]}
        py={10}
        color={"blue.900"}
        maxWidth="100%"
        margin="auto"
      >
        <Heading size={["md", "lg", "xl"]} mb={10}>
          <Link _hover={{ textDecoration: "none" }} href="#">
            QuoteNest
          </Link>
        </Heading>
        <FooterLinks />
        <SocialLinks />
        <Box fontSize={"sm"}>
          &copy; 2024 QuoteNest. All rights reserved.{" "}
          <Box display={"inline"}>
            <Image display={"inline"} h={"15px"} src={heartIcon} />
          </Box>{" "}
          Danish Khan
        </Box>
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
