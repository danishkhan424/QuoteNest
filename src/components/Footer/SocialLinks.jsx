import React from 'react'
import { Flex, Link } from '@chakra-ui/react'

const SocialLinks = () => {
  return (
    <Flex
      textAlign="center"
      mx={"auto"}
      gap={5}
      justifyContent={"center"}
      fontSize={["sm", "md", "lg"]}
      fontWeight={"bold"}
      my={[10, 10]}
    >
      <Link
        href="https://facebook.com/danishkhan424"
        target="_blank"
        rel="noopener noreferrer"
      >
        Facebook
      </Link>
      |
      <Link
        href="https://twitter.com/yourpage"
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </Link>
      |
      <Link
        href="https://instagram.com/danish_khan_424"
        target="_blank"
        rel="noopener noreferrer"
      >
        Instagram
      </Link>
      |
      <Link
        href="https://linkedin.com/in/danishkhan424"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </Link>
    </Flex>
  );
}

export default SocialLinks