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
        <App />
  </React.StrictMode>
  </>
);
