import React, { useEffect, useState } from "react";
import Product from "./Product/Product";
import axios from "axios";
import { Outlet } from "react-router-dom";
import { CartContext, CartProvider } from "../../context/CartContext";
const Products = () => {
  const [arr,setarr]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:8080/products").then(res=>{
      setarr(res.data)
      console.log(res.data)
    })
  },[])
  return <div>
    <h1>Products</h1>
  {  arr.map((e)=>(

  <Product key={e.id}  element={e}/>
 
  ))}

  </div>;
};

export default Products;
