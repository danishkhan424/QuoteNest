import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

const quotes = [
  {
    id: 1,
    quote: "❝It's not about the price, it's about the quality of life.❞",
    author: "~ Michael Scott",
  },
  {
    id: 2,
    quote:
      "❝You don't have to be great to start, but you have to start to be great.❞",
    author: "~ Zig Ziglar",
  },
  {
    id: 3,
    quote: "❝If you want to achieve greatness stop asking for permission.❞",
    author: "~ Anonymous",
  },
  {
    id: 4,
    quote:
      "❝Success usually comes to those who are too busy to be looking for it.❞",
    author: "~ Henry David Thoreau",
  },
  {
    id: 5,
    quote:
      "❝The only limit to our realization of tomorrow will be our doubts of today.❞",
    author: "~ Franklin D. Roosevelt",
  },
  {
    id: 6,
    quote: "❝The only way to predict the future is to create it.❞",
    author: "~ Abraham Lincoln",
  },
];

const Section3 = () => {
  return (
    <Box>
      <SimpleGrid
        mb={["20px"]}
        px={10}
        columns={[1, 2, 3]}
        spacing={2}
        className="section3"
      >
        {quotes.map((quote) => (
          <Flex className="quoteCard">
            <Text fontSize={["12px", "12px", "16px"]}>{quote.quote}</Text>
            <Text color={"gray.500"} pt={3} fontSize={["8px", "10px", "12px"]}>
              {quote.author}
            </Text>
          </Flex>
        ))}
      </SimpleGrid>
      
    </Box>
  );
};

export default Section3;
