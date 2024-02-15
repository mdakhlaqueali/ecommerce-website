import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CartContextProvider from './store/CartContextProvider';
import { AuthContextProvider } from './store/auth-context';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
  <CartContextProvider>
  <BrowserRouter>
    <App />
    </BrowserRouter>
  </CartContextProvider>
  </AuthContextProvider>
);