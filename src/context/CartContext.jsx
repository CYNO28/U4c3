import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  

  const [cart, setCart] = useState([]);
 
  useEffect(() => {
    axios.get("http://localhost:8080/cartItems").then(res => {setCart(res.data)})
  },[])
  return <CartContext.Provider value={{cart }}>{children}</CartContext.Provider>;
};
