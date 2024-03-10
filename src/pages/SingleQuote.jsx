import { Flex, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";

const initialState = {
  isLoading: false,
  quote: [],
};

function reducer(state, { type, payload }) {
  switch (type) {
    case "isLoading": {
      return {
        ...state,
        isLoading: payload,
      };
    }
    case "quote": {
      return {
        ...state,
        quote: payload,
      };
    }
  }
}

const SingleQuote = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { id } = useParams();
  const { isLoading, quote } = state;

  async function fetchSingleQuote() {
    dispatch({ type: "isLoading", payload: true });
    try {
      const res = await axios.get(`https://api.quotable.io/quotes/${id}`);
      console.log("data: ", res.data);
      console.log("quotes: ", res.data.content);
      dispatch({ type: "quote", payload: res.data });
    } catch (error) {
    } finally {
      dispatch({ type: "isLoading", payload: false });
    }
  }

  useEffect(() => {
    fetchSingleQuote();
  }, [id]);

  // 
  return isLoading ? (
    <Loader />
  ) : (
    quote.length > 0 && (
      <Flex
        minH={"100vh"}
                  px={20}
                  w={"100%"}
        bg={"blue.50"}
        flexDir={["column"]}
        color={"blue.900"}
      >
        <Stack spacing={5} rounded={"2xl"} className="singleQuote" my={"20vh"}>
          <Text fontSize={["1.2em", "1.4em", "1.6em", "1.8em"]}>
            <Text mr={1} as="span" fontWeight={"bold"} display={"inline"}>
              Author:
            </Text>{" "}
            {quote.author}
          </Text>
          <Text>
            <Text mr={1} as="span" fontWeight={"bold"} display={"inline"}>
              Quote:
            </Text>{" "}
            {quote.content}
          </Text>
          <Text>
            <Text mr={1} as="span" fontWeight={"bold"} display={"inline"}>
              Hashtags:
            </Text>{" "}
            #{quote.tags.join(", #")}
          </Text>
          <Flex
            justifyContent={"space-between"}
            fontSize={[".6em", ".7em", ".8em", ".9em"]}
          >
            <Text mr={10}>
              <Text mr={1} as="span" fontWeight={"bold"} display={"inline"}>
                Added on:
              </Text>{" "}
              {quote.dateAdded}
            </Text>
            <Text>
              <Text mr={1} as="span" fontWeight={"bold"} display={"inline"}>
                Modified on:
              </Text>{" "}
              {quote.dateModified}
            </Text>
          </Flex>
        </Stack>
      </Flex>
    )
  );
};

export default SingleQuote;
