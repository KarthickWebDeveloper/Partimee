/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

export const userContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem("isLoggedIn") || "");
  const [userType, setUserType] = useState(localStorage.getItem("UserType") || "");

  useEffect(() => {
    setUser(localStorage.getItem("isLoggedIn"));
    setUserType(localStorage.getItem("UserType"));
  }, [user, userType]);

  return (
    <userContext.Provider value={{ user, userType }}>
      {children}
    </userContext.Provider>
  );
};
