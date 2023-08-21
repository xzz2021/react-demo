import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
     {/* 注入路由  顶层包裹路由， 避免hook调用bug */}
     <BrowserRouter>   
     <App />
     </BrowserRouter>
  </React.StrictMode>
);
