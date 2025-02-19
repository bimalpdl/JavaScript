import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Conditional from './components/Conditional';
import Styling from './components/Styling';

const root = ReactDOM.createRoot(document.getElementById('conditional'));
root.render(
  <React.StrictMode>      {/* This is how we write comment in JSX inside curly braces and using multiline comment format */}
    {/*
    <App name="Bimal Paudel" />   {/* props name="Bimal Paudel" is used here, since it is send the props this component is called parent component.

<Conditional isMinor={false}/> 
*/}

<Styling />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
