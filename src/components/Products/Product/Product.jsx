import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { CartContext } from "../../../context/CartContext";
const Product = ({element}) => {
  // Note: this id should come from api
  // 

  const [count,setcount]=useState(0)

const product=element.id
useEffect(()=>{
  axios.get(`http://localhost:8080/cartItems/${product}`).then(res=>{

    setcount(res.data.count)
   
  })
},[])
function addHandler(product){
  
  axios({
    method: "post",
    url:`http://localhost:8080/cartItems`,
    data: {
      product:product,
      id:product,
      count:2
    }
  
  }).then(res=>{setcount(count+1)})
setcount(count+1)
  console.log("working")
}
function dltHandler(){
  setcount(0)
axios.delete(`http://localhost:8080/cartItems/${product}`).then(res=>{
  console.log(res.data)
})



    }
function incrementHandler(){
  axios({
    method: "post",
    url:`http://localhost:8080/cartItems`,
    data: {
      product:product,
      id:product,
      count:1
    }
    
  }).then(res=>{setcount(count+1)})
  setcount(count+1)
}
function decremnetHandler(){

  axios({
    method: "post",
    url:`http://localhost:8080/cartItems`,
    data: {
      product:product,
      id:product,
      count:1
    }
  
  }).then(res=>{setcount(count+1)})
setcount(count-1)
}    


  return (
    <div data-cy={`product-${product.id}` } style={{display:'inline-block',border:'1px solid black',borderRadius:'10px',padding:'10px',margin:"10px"}}>
      
      <h3 data-cy="product-name">{element.name}</h3>
      <h6 data-cy="product-description">{element.description}</h6>
      {!count?<button data-cy="product-add-item-to-cart-button" onClick={addHandler}>Add To Cart</button>:null}
      {count?<div>
        <button data-cy="product-increment-cart-item-count-button" onClick={incrementHandler}>+</button>
        <span data-cy="product-count">
          {count}
        </span>
        <button data-cy="product-decrement-cart-item-count-button" onClick={decremnetHandler}>-</button>
        <button data-cy="product-remove-cart-item-button" onClick={dltHandler}>Remove from cart</button>
      </div>:null}
    </div>
  );
};

export default Product;
