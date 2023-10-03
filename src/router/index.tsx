
import React, { lazy } from 'react';
import { createBrowserRouter } from "react-router-dom";
// import Home from '../page/home';
import LayoutApp, { layoutloader } from '../page/layout';
import ErrorPage from '../page/error';
import { roleloader } from '../page/roles/table'
import Loading from '../page/loading';
import { loginloader } from '../page/login';
import { usersloader } from '../page/users';

// import Users from '../page/users';
// import Profile from '../page/profile';
// import NotFound from '../page/error';
import Login from '../page/login';
// import Roles from '../page/roles';
// import Permissions from '../page/permissions';
// import Menus from '../page/menus';

  export  const router = createBrowserRouter (
    [{
      path: '/',
      element: <LayoutApp/>,
      loader: layoutloader,
      errorElement: <ErrorPage />,
      children: [
        // {
        //   index: true,
        //   element: <Loading />
        // },
        {
          path: 'home',
          // element: <Home />,
          Component: lazy(()=> import('../page/home'))
          
        },
        {
          path: '/users',
          // element: <Users />,
          Component: lazy(()=> import('../page/users')),
          loader: usersloader
        },
        {
          path: '/roles',
          // element: <Roles />,
          Component: lazy(()=> import('../page/roles')),
          loader: roleloader,

        },
        {
          path: '/menus',
          // element: <Menus />,
          Component: lazy(()=> import('../page/menus'))

        },
        {
          path: '/permissions',
          // element: <Permissions />,
          Component: lazy(()=> import('../page/permissions'))

        },
        {
          path: '/profile',
          // element: <Profile />,
          Component: lazy(()=> import('../page/profile'))
        },
        {
          path: '/test',
          // element: <NotFound />,
          Component: lazy(()=> import('../page/error'))

        },
        {
          path: '*',
          // element: <NotFound />,
          Component: lazy(()=> import('../page/error'))
        },
        
      ]
    },
    {
      path: '/login',
      loader: loginloader,
      // Component: lazy(()=> import('../page/login'))
      element: <Login />,
    },
    {
      path: '*',
      element: <Loading />,
      errorElement: <ErrorPage />,
      // Component: lazy(()=> import('../page/loading'))
    },
  ]
  )




