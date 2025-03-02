import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactHook from './components/ReactHook';
import OnClickExpression from './components/OnClickExpression';
import PropsChild, {Entity} from './components/PropsChild';
import {Parent, Child} from './components/StateLifting';
import {Room, Garage} from './components/ArrayMap';
import {Forms} from './components/Forms';
import StateManagement from './components/StateManagement/StateManagement';
import ToggelButton from './components/StateManagement/ToogleButton';
import ToDoApp from './components/miniProjects/ToDoApp';

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
        </>  } 
		/>
    <Route path="room" element={
      <>
	    <Room />
	    <Garage />
	  </>
    }	/>

	<Route path="forms" element={ <Forms /> } />

	<Route path="hola" element={<StateManagement />} />

	<Route path="toggle-button" element={<ToggelButton/>} />

	<Route path="todo" element={ <ToDoApp /> } />



		</Routes>
		</Router>
	);
}

export default App;
