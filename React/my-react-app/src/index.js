import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {Conditional, RandomNumber} from './components/Conditional';
// import Styling from './components/Styling';
// import {Arrow, Arrow1} from './components/Arrow';
// import Nav from './components/Nav';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>      {/* This is how we write comment in JSX inside curly braces and using multiline comment format */}
  
    <App name="Bimal Paudel" />  
     {/* props name="Bimal Paudel" is used here, since it is send the props this component is called parent component. 
*/}
{/* <Conditional isMinor={false}/>  */}
{/* <RandomNumber /> */}

{/*  
<Styling />

<Arrow name="Bimal Paudel" />
<Arrow1 first="Bimal" second="Rohini" third="Matrika"/>
*/}

{/* <Nav /> */}


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
