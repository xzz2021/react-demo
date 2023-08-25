import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
  {/* <React.StrictMode> */}
     {/* 注入路由  顶层包裹路由， 避免hook调用bug */}
     <RouterProvider router={router} />
     {/* <App /> */}

  {/* </React.StrictMode> */}
  </>
);
