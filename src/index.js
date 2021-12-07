import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import AuthProvider from './components/contexts/Auth';
import CartProvider from './components/contexts/Cart';
import "./components/css/style.css"
import './index.css'
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
