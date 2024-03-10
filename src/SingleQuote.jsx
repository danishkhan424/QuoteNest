import { Flex, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "./components/Loader";

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
        pb={20}
        w={"100%"}
        bg={"blue.50"}
        flexDir={["column"]}
        color={"blue.900"}
      >
        <div class="quoteFirst">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
        <div class="quoteSecond">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
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

        {/* ***************************************************************************************** */}
      </Flex>
    )
  );
};

export default SingleQuote;
