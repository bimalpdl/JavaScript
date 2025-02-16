// TODO: this whole code is broken, fix it
import logo from './logo.svg';
import './App.css';

// this is an example of functional component: 
function MyHeader() {
  return <h1>Hello there!!</h1>
}
function App(props) {     // props is declared here using 'props' keyword
  // since this component is receiving the props, it is called child component.
  // props.name = "Rohini";    # this'll throw an error since we can't modify the props value
  return ( 
    <MyHeader />
    {<h1> Hello {props.name}! How are you doing today? </h1>}   // props.ArgumentName is used here to access props argument (passed from parent component).
  );
  
}
// MyHeader and App are functional component and APP() component invokes MyHeader component.
// notice that while invoking the other component using XML like syntax (with self closing tag with component name inside)
export default App;
