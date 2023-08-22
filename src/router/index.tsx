
import React from 'react';
import { createBrowserRouter, Link, Navigate } from "react-router-dom";
import Home from '../page/home';
import Users from '../page/users';
import Profile from '../page/profile';
import NotFound from '../page/error';
import LayoutApp from '../page/layout';
import Login from '../page/login';
  

  export  const router = createBrowserRouter (
    [{
      path: '/',
      element: <LayoutApp/>,
      children: [
        {
          path: '/home',
          element: <Home />
        },
        {
          path: '/users',
          element: <Users />
        },
        {
          path: '/profile',
          element: <Profile />
        },
        {
          path: '*',
          element: <NotFound />,
        },
        {
          path: '/test',
          element: <NotFound />,
        },
      ]
    },
    {
      path: '/',
      element: <Navigate to="/home"/>
    },
    // {
    //   path: '*',
    //   element: <NotFound />,
    // },
    {
      path: 'login',
      element: <Login />,
    }
  ]
  )

  export  const MyrouterLink = () => {

    return (
            <>
            <Link to='/users' />
            <Link to='/home' />
            <Link to='/profile' />
            </>
    )
  }


