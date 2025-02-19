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
}
export default Conditional;
