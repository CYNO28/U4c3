import React from "react";
import { Route, Routes } from "react-router-dom";
import Product from "../components/Products/Product/Product";
import Products from "../components/Products/Products"
import { CartProvider } from "../context/CartContext";
const Home = () => {
  return <div>
home
<CartProvider>
<Products></Products>
</CartProvider>
  </div>;
};

export default Home;
