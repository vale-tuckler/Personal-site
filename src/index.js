import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../node_modules/reactstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

//Always import the CSS file of the bootstrap library.

ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById('root')
);