import { Box, Button, HStack } from "@chakra-ui/react";
import React from "react";

const createArray = (total) => {
  return Array.from({ length: total }, (_, i) => i + 1);
};

const Pagination = ({ total, current, onChange }) => {
  return (
    <Box w="100%" textAlign={"center"} mb={10}>
      <Box minW={"50%"} m={"auto"} className="pagination" maxW={"80%"}>
        <HStack justifyContent={"center"} gap={4} m={"auto"}>
          <Button
            className="changePage"
            size={["sm", "md", "lg"]}
            bg={"blue.100"}
            isDisabled={current === 1}
            rounded={"full"}
            colorScheme={"blue.800"}
            color={"blue.800"}
            onClick={() =>
              onChange({ type: "currentPage", payload: current - 1 })
            }
          >
            {"<"}
          </Button>
          {createArray(total).map((page, i) => (
            <Button
              size={["sm", "md", "lg"]}
              className={`changePage ${page === current ? "active" : ""}`}
              rounded={"full"}
              isDisabled={page === current}
              bg={"blue.100"}
              colorScheme={"blue.800"}
              color={"blue.800"}
              variant={page === current ? "outline" : "solid"}
              key={i}
              onClick={() => onChange({ type: "currentPage", payload: page })}
            >
              {page}
            </Button>
          ))}
          <Button
            size={["sm", "md", "lg"]}
            className="changePage"
            isDisabled={current === total}
            bg={"blue.100"}
            rounded={"full"}
            colorScheme={"blue.800"}
            color={"blue.800"}
            onClick={() =>
              onChange({ type: "currentPage", payload: current + 1 })
            }
          >
            {">"}
          </Button>
        </HStack>
      </Box>
    </Box>
  );
};

export default Pagination;
