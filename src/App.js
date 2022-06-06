import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Product from "./components/Products/Product/Product";
import Products from "./components/Products/Products";
import RequiredAuth from "./hoc/RequiredAuth";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <RequiredAuth>
              <Home />
            </RequiredAuth>
          }
         
        >
        </Route>
        
    
        
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
