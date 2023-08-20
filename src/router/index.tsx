
import React from 'react';
// import ReactDOM from "react-dom";


import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom";
import App from '../App';
import Login from '../page/login';
import Register from '../page/login/register';
  
  export  const router = createBrowserRouter (
    createRoutesFromElements(
      <>
        <Route path="/" element={<App />}></Route>
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/register" element={<Register />} ></Route>
      </>
    )
  )
  