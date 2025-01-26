import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import PasswordProtect from './components/PasswordProtect/PasswordProtect';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PasswordProtect>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PasswordProtect>
  </React.StrictMode>
);

reportWebVitals();