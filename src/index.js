import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'flowbite';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
export const facebook = require('./icons/facebook.png');
export const google1 = require('./icons/google1.png');
export const google2 = require('./icons/google2.png');
export const youtube = require('./icons/youtube.png');
export const linkedin = require('./icons/linkedin.png');
export const iiucLogo = require('./images/iiuc-logo.png');
export const img1 = require('./images/img1.jpeg');
export const img2 = require('./images/img2.jpeg');
export const img3 = require('./images/img3.jpeg');
