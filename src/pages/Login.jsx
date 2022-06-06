import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const {Login}=useContext(AuthContext)
  return (
    
    <div>
      <h1>Login</h1>
      <input data-cy="login-email" placeholder="Enter Name"/>
      <input data-cy="login-password" placeholder="Enter pass"/>
      <button data-cy="login-submit" onClick={Login}> Login</button>
    </div>
  );
};

export default Login;
