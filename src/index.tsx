import React from 'react';
import ReactDOM from 'react-dom';
import './shared/_next/static/css/style.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './../src/icofont/icofont.min.css'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
