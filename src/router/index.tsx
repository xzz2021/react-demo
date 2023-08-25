
import React, { lazy } from 'react';
import { createBrowserRouter, Link, Navigate } from "react-router-dom";
// import Home from '../page/home';
import LayoutApp from '../page/layout';


// import Users from '../page/users';
// import Profile from '../page/profile';
// import NotFound from '../page/error';
// import Login from '../page/login';
// import Roles from '../page/roles';
// import Permissions from '../page/permissions';
// import Menus from '../page/menus';


// let allEntities2 = [path.resolve(__dirname,'src/page/*/index.tsx',)]
// console.log("🚀 ~ file: index.tsx:19 ~ allEntities2:", allEntities2)


  export  const router = createBrowserRouter (
    [{
      path: '/',
      element: <LayoutApp/>,
      children: [
        {
          path: '/home',
          // element: <Home />,
          Component: lazy(()=> import('../page/home'))
          
        },
        {
          path: '/users',
          // element: <Users />,
          Component: lazy(()=> import('../page/users'))

        },
        {
          path: '/roles',
          // element: <Roles />,
          Component: lazy(()=> import('../page/roles'))

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
          path: '*',
          // element: <NotFound />,
          Component: lazy(()=> import('../page/error'))

        },
        {
          path: '/test',
          // element: <NotFound />,
          Component: lazy(()=> import('../page/error'))

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
      // element: <Login />,
      Component: lazy(()=> import('../page/login'))

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


