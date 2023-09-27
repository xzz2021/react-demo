import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import mitt from  'mitt'
import { Provider } from 'react-redux';
import store from './redux';
window.emitter = mitt()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <>
    <React.StrictMode>
      <Provider store= {store}>

        <App />
      </Provider>
  </React.StrictMode>
  </>
);
