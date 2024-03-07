import React, { useReducer, createContext } from "react";

const initialState = {
  email: "",
  password: "",
  isLoggedIn: true,
};

const reducer = (state, { type, payload }) => {};

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
