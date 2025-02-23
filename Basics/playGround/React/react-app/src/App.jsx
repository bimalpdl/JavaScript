import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactHook from './components/ReactHook';
import OnClickExpression from './components/OnClickExpression';
import PropsChild from './components/PropsChild';
function App() {
	return (
		<Router>
<Routes>
		{/* <ReactHook /> */}
    <Route path='/' element={<OnClickExpression />} />
	  <Route path='reacthook' element={<ReactHook />} />
    <Route path='propschild' element={
      	
		<PropsChild name="Bimal">    {/* The elements defined inside component body are called Props childredn, in this case h1 and are childern of 'PropsChild' component */}
		<h1>Hello there, I'm props children</h1>
		<p>I am props childern too</p>
		</PropsChild>
    }/>
    </Routes>
		</Router>

	);
}

export default App;
