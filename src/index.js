import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CartContextProvider from './store/CartContextProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartContextProvider>
    <App />
  </CartContextProvider>
);