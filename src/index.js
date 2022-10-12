import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import RouteSwitch from './RouteSwitch';
import { BrowserRouter } from 'react-router-dom';
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RouteSwitch />
    </BrowserRouter>
  </React.StrictMode>,
);
reportWebVitals();
