import './App.css'
import ReactHook from './components/ReactHook';
import OnClickExpression from './components/OnClickExpression';
import PropsChild from './components/PropsChild';
function App() {
  return (
    <>
    {/* <ReactHook /> */}
<OnClickExpression />
<PropsChild >    {/* The elements defined inside component body are called Props childredn, in this case h1 and are childern of 'PropsChild' component */}
  <h1>Hello there, I'm props children</h1>
  <p>I am props childern too</p>
</PropsChild>
    </>
  );
}

export default App;
