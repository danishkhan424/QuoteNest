import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./authProvider/AuthContextProvider";
import Generate from "./Generate";

const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);
  return isLoggedIn ? children : <Navigate to="/signup" />;
};

export default PrivateRoute;
