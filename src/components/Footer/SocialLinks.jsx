import React from 'react'
import { Flex } from '@chakra-ui/react'
import { Link } from "react-router-dom"

const SocialLinks = () => {
  return (
    <Flex
      textAlign="center"
      mx={"auto"}
      gap={5}
      className='socialLinks'
      justifyContent={"center"}
      fontSize={["sm", "md", "lg"]}
      fontWeight={"bold"}
      my={[10, 10]}
    >
      <Link
        to="https://facebook.com/danishkhan424"
        target="_blank"
      >
        Facebook
      </Link>
      |
      <Link
        to="https://twitter.com/yourpage"
        target="_blank"
      >
        Twitter
      </Link>
      |
      <Link
        to="https://instagram.com/danish_khan_424"
        target="_blank"
      >
        Instagram
      </Link>
      |
      <Link
        to="https://linkedin.com/in/danishkhan424"
        target="_blank"
      >
        LinkedIn
      </Link>
    </Flex>
  );
}

export default SocialLinks