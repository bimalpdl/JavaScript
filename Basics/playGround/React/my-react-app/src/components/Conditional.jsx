function IsMinor() {
  return (
    <>
    <p>You're still a minor, you can't vote sir!</p>
    </>    
  );
}

function IsAdult() {
  return (
     <>
     <p>You can vote. The election is on 27th of March.</p>
     </>
  );
}


function Conditional(props) {
  let isMinor = props.isMinor;

    if(isMinor) {
      return <IsMinor />;
    }
      return <IsAdult />;
    {/* we can use ternary operater as well, but since it's an js expression, we'll need to wrap it around
      curly braces{}, like : 
      
    {isMinor? <IsMinor /> : <IsAdult />}
    


      */}
}

function RandomNumber () {
  return (
    <>
    <p>Random number between 1 and 10 = <span style={{color:"Red", fontSize:"larger", fontWeight:"800"}}>{Math.floor(Math.random()* 10 +1)}</span></p>   
    {/*  Function invocation is an expression because every expression returns a value, and function invocation will always return a value, even when that return value is undefined. Therefore function needs to be invoked inside curly braces {} */}
    <p>Refresh the page to get another random number.</p>
    </>
  );
}
export {Conditional, RandomNumber};
