import {
  Stack,
  InputGroup,
  InputLeftElement,
  Select,
  Image,
  Button,
  Box,
} from "@chakra-ui/react";
import React, { useState } from "react";
import numberIcon from "../../assets/number-block.png";
import sortIcon from "../../assets/sort.png";

const InputData = ({ onChange }) => {
  const [value, setValue] = useState(null);
  const [sortType, setSortType] = useState(null);
  const handleSubmit = (e) => {
      e.preventDefault();
    if (value && sortType) {
        onChange({
          type: "numberOfQuotes",
          payload: parseInt(value),
        });
        onChange({ type: "sortType", payload: sortType });
    }
  };

  return (
    <Stack w={"40%"} m={"auto"}>
      <form onSubmit={handleSubmit}>
        <InputGroup size={["sm", "md"]}>
          <InputLeftElement>
            <Image src={numberIcon} alt="numberIcon" />
          </InputLeftElement>
          <Select
            size={["sm", "md", "lg"]}
            variant="flushed"
            pl={10}
            placeholder="Slect number of quotes"
            color="#1A365D"
            onChange={(e) => setValue(e.target.value)}
          >
            <option value="3">3</option>
            <option value="6">6</option>
            <option value="9">9</option>
          </Select>
        </InputGroup>
        <InputGroup>
          <InputLeftElement>
            <Image src={sortIcon} alt="numberIcon" />
          </InputLeftElement>
          <Select
            size={["sm", "md", "lg"]}
            color="#1A365D"
            variant="flushed"
            pl={10}
            placeholder="Select sort type"
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="asc">Short</option>
            <option value="desc">Long</option>
          </Select>
        </InputGroup>
        <Box  m={"auto"} w={"50%"} textAlign={"center"}>
          <Button
            type="submit"
            w={"100%"}
            mt={10}
            size={["sm", "md", "lg"]}
            colorScheme="blue.900"
            variant="outline"
            _hover={{ bg: "blue.800", color: "blue.200" }}
            bg={"blue.100"}
          >
            Generate
          </Button>
        </Box>
      </form>
    </Stack>
  );
};

export default InputData;

/**
 
 onChange({
                type: "numberOfQuotes",
                payload: parseInt(e.target.value),
              })

              onChange({ type: "sortType", payload: e.target.value })
 */
