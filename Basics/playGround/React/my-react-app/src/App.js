
import Footer from './components/Footer';
import Promo from './components/Promo';
import Nav from './components/Nav';
import Conditional from './components/Conditional';
import './App.css';


// this is an example of functional component: 
function MyHeader() {
  return <h1>Hello there!!</h1>
}
function App(props) {     // props is declared here using 'props' keyword
  // since this component is receiving the props, it is called child component.
  // props.name = "Rohini";    # this'll throw an error since we can't modify the props value
  return ( 
    <>
     <MyHeader />
     <Footer name="Bimal" />  {/* passing name argument for Footer component (using HTML attribute like syntax) */}
    <h1> Hello {props.name}! How are you doing today? </h1>  {/* props.ArgumentName is used here to access props argument (passed from parent component).*/}
    <Promo percentage="75" date="25"/>  {/* We can pass multiple arguments like this. */}

    <Nav name="Bimal" mail="info@bimalpdl.com" contact="1234567890"/>
    <Conditional value={true} />
  </>

   );
  
}
// MyHeader and App are functional component and APP() component invokes MyHeader component.
// notice that while invoking the other component using XML like syntax (with self closing tag with component name inside)
export default App;
