import { Flex } from "@chakra-ui/react";
import React from "react";
import Home from "./Home";
import Login from "./Login";
import Generate from "./Generate";
import About from "./About";
import PrivateRoute from "./PrivateRoute";
import { Route, Routes } from "react-router-dom";
import SignUp from "./SignUp";
import SingleQuote from "./SingleQuote";

const AllRoutes = () => {
  return (
    <Flex bg={"blue.50"}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/generate"
          element={
            <PrivateRoute>
              <Generate />
            </PrivateRoute>
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/quotes/:id"
          element={
            <PrivateRoute>
              <SingleQuote />
            </PrivateRoute>
          }
        />
      </Routes>
    </Flex>
  );
};

export default AllRoutes;
