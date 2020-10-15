import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clock from './Components/Clock';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Clock />
    <button style={{"margin-top":"40px"}}>Change color</button>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
