import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(1);   {/* useState hook and destructuring is used here. */}
  return(
    <>
    <h1>Hello There!!</h1>
    <button onClick={() => setCount((count) => count + 5 )} className='counterButton'>The here to increment the count by 5:  {count}</button>
    </>
  );
}

export default App;
