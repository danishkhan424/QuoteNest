import { Flex } from "@chakra-ui/react";
import React from "react";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Generate from "../pages/Generate";
import About from "../pages/About";
import PrivateRoute from "./PrivateRoute";
import { Route, Routes } from "react-router-dom";
import SignUp from "../pages/SignUp";
import SingleQuote from "../pages/SingleQuote";

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
