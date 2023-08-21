
import React from 'react';
import { createBrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import Login from '../page/login';
// import Register from '../page/login/register';
import Home from '../page/home';
import Users from '../page/users';
import Profile from '../page/profile';
  

  export  const router2 = createBrowserRouter (
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
      {
        path: '/profile',
        element: <Profile />,
      }
  ]
  )

  export  const Myrouter = () => {

    return (

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<Users />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
    )
  }


