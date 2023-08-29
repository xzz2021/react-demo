import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import mitt from  'mitt'
window.emitter = mitt()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <>
    <React.StrictMode>
     {/* 注入路由  顶层包裹路由， 避免hook调用bug */}
     {/* <RouterProvider router={router} /> */}
     {/* <ConfigProvider locale={zhCN}> */}
        <App />
     {/* <ConfigProvider /> */}
  </React.StrictMode>
  </>
);
