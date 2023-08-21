
import React from 'react';
import { createBrowserRouter, Navigate } from "react-router-dom";
// import Login from '../page/login';
// import Register from '../page/login/register';
import Home from '../page/home';
import Users from '../page/users';
  

  export  const router = createBrowserRouter (
    [
      {
      path: '/',
      element: <Navigate to="/home"/>
    },
    {
      path: '/home',
      element: <Home />,
    },
      {
        path: '/users',
        element: <Users />,
      },
    //   {
    //     path: '/login',
    //     element: <Login />,
    //   },
    
    // {
    //   path: '/register',
    //   element: <Register />,
    // }
  ]
  )