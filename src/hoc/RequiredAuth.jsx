import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext, AuthProvider } from "../context/AuthContext";

const RequiredAuth = ({ children }) => {
  const {isAuth}=useContext(AuthContext)
  
  if(!isAuth){
  return <Navigate to={'/login'}/>
  }
  else
  return children;
};

export default RequiredAuth;
