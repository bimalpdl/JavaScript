import logo from './logo.svg';
import './App.css';

// this is an example of functional component: 
function MyHeader() {
  return <h1>Hello there!!</h1>
}
function App() {
  return <MyHeader />;
  
}
// MyHeader and App are functional component and APP() component invokes MyHeader component.
// notice that while invoking the other component using XML like syntax (with self closing tag with component name inside)
export default App;
