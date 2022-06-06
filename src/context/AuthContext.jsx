import React, { createContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Login from "../pages/Login";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate=useNavigate()
  const [isAuth,setAuth]=useState(false)
  const Login=()=>{
  setAuth(true)
  navigate("/")
 


}
const logout=()=>{
  setAuth(false)
  console.log("worked")
  
}


  return <AuthContext.Provider value={{isAuth,Login,logout}}>{children}</AuthContext.Provider>;
};
