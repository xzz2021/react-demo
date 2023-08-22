import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
  {/* <React.StrictMode> */}
     {/* 注入路由  顶层包裹路由， 避免hook调用bug */}
     <App />
  {/* </React.StrictMode> */}
  </>
);
