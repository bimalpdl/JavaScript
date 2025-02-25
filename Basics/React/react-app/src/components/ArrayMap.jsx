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


// Keys allow React to keep track of elements. This way, if an item is updated or removed, only that item will be re-rendered instead of the entire list.
// Keys need to be unique to each sibling. But they can be duplicated globally.
// The above example with keys would look like the following: 

function Room1(props) {
   const peoples1 = [
{id: 1, name: "Erwin"},
{id: 1, name: "Levi"},
{id: 1, name: "Historia"},
{id: 1, name: "Eren"},
{id: 1, name: "Armin"}
   ];

    return(
        <>
        <h1>These people are helding meeting: </h1>
        <ul>
            {peoples1.map((person) => <Individual1 id={person1.id} name={person1.name} />)}
        </ul>
        </>
    );
}

function Individual1(props) {
    return (
        <>
        <h2>{props.name}</h2>
        </>
    );
}

export {Room, Room1};