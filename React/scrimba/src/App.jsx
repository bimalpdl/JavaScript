import { useState } from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
// import Footer from './components/Footer'; 
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Main />
    {/* <Footer /> */}
    </>
  )  
}



export default App;
