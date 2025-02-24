import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactHook from './components/ReactHook';
import OnClickExpression from './components/OnClickExpression';
import PropsChild, {Entity} from './components/PropsChild';
import {Parent, Child} from './components/StateLifting';

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

    <Route path="entity" element={<Entity />} />
	<Route path="statelifting" element={  
		<>
			<Parent />
			<Child />
</>
	} />

		</Routes>
		</Router>

	);
}

export default App;
