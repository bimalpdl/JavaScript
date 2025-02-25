// The .map() method allows you to run a function on each item in the array, returning a new array as the result.
// In React, map() can be used to generate lists.

function Room() {
    const peoples = ["John", "Levi", "Mikasa", "Eren", "Armin"];
    return (
        <>
        <h1>People in the room: </h1>
        <ul>
            {peoples.map((person) => <Individual name={person}/>)}
        </ul>
        <h2>Hello scouts, welcome to the titan home.</h2>
        </>
    ); 
}

function Individual(props) {
    return (
    <h2> {props.name} from the scout.</h2>
    );
}

export {Room};