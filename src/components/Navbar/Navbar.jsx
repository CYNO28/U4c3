import React, { useContext ,useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";

// use react-router Link or NavLink


const Navbar = () => {
  const {logout ,isAuth}=useContext(AuthContext)
 const {cart}=useContext(CartContext)
 const [count,setcount]=useState(cart.length)
  return (
    <div data-cy="navbar">
 
      <Link data-cy="navbar-home-link" to={'/'} >Logo</Link>
      <span data-cy="navbar-cart-items-count">{count}</span>
      <button data-cy="navbar-login-logout-button" onClick={logout}>{isAuth?"Logout":"Login"}</button>
    </div>
  );
};

export default Navbar;
