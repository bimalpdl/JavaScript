// TODO: the output is displaying the both conditions, ie. true and false , fix it 
function MadeGoal() {
  return (
    <h1>Congrats, you scored a goal</h1>
  );
}

function MissGoal() {
  return(
    <h1>Sorry, you missed the goal</h1>
  );
}

function Conditional(props) {
  return(
    <>
  const isGoal = props.value;
  isGoal ? <MadeGoal/> : <MissGoal/>;

  </>
  );
}

export default Conditional;