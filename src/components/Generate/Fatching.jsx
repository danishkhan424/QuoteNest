import { Box } from "@chakra-ui/react";
import React, { useEffect, useReducer, useState } from "react";

import Grid from "./Grid";
import InputData from "./InputData";
import axios from "axios";
import Loader from "../Loader";

const initialState = {
  quotes: [],
  sortType: "",
  isLoading: false,
  numberOfQuotes: 0,
  totalPages: "",
  currentPage: 1,
};

function reducer(state, { type, payload }) {
  switch (type) {
    case "quotes": {
      return {
        ...state,
        quotes: payload,
      };
    }
    case "sortType": {
      return {
        ...state,
        sortType: payload,
      };
    }
    case "numberOfQuotes": {
      return {
        ...state,
        numberOfQuotes: payload,
      };
    }
    case "totalPages": {
      return {
        ...state,
        totalPages: payload,
      };
    }
    case "currentPage": {
      return {
        ...state,
        currentPage: payload,
      };
    }
    case "isLoading": {
      return {
        ...state,
        isLoading: payload,
      };
    }
    default: {
      throw new Error("Invalid action type", type);
    }
  }
}

const Fatching = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const {
    quotes,
    sortType,
    isLoading,
    numberOfQuotes,
    totalPages,
    currentPage,
  } = state;

  async function fetchQuotes() {
    dispatch({ type: "isLoading", payload: true });
    try {
      const res = await axios.get(
        `https://api.quotable.io/quotes?sortBy=length&order=${sortType}&limit=${numberOfQuotes}&page=${currentPage}&maxLength=120`
      );
      console.log("data: ", res.data);
      console.log("quotes: ", res.data.results);
      console.log("totalPages: ", res.data.totalPages);
      console.log("currentPage: ", res.data.page);
      dispatch({ type: "quotes", payload: res.data.results });
      dispatch({ type: "totalPages", payload: res.data.totalPages });
      dispatch({ type: "currentPage", payload: res.data.page });
    } catch (error) {
    } finally {
      dispatch({ type: "isLoading", payload: false });
    }
  }

  useEffect(() => {
    fetchQuotes();
  }, [numberOfQuotes, sortType]);

  return (
    <Box w={"100%"} mx={"auto"} mt={["20px", "40px", "50px"]} >
      <InputData onChange={dispatch} />
      {isLoading ? (
        <Loader />
      ) : (
        quotes.length > 1 && (
          <>
            <Grid quotes={quotes} isLoading={isLoading} />
            
          </>
        )
      )}
    </Box>
  );
};

export default Fatching;
