import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Loginbtn from "./Component/Loginbtn";
import Logoutbtn from "./Component/Logoutbtn";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Login from "./Component/Login";
import { useState } from "react";
import Home from "./Component/Home";



function App() {
  
 const router = createBrowserRouter([
   {
      path: "/",
      element: <><Navbar /><Home /></>
    },
    {
      path: "/login",
      element: <><Navbar /><Login /></>
    },
    {
      path: "/about",
      element: <><Navbar /><About /></>
    },
    {
      path: "/contact",
      element: <><Navbar /><Contact /></>
    },
   
       
      
  ])
   
  return (
    <>
  
      <RouterProvider router={router} />
    
    </>
  );
}

export default App;
// src/App.tsx
