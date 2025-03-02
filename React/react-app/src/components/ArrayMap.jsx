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


function Garage() {
    const cars = [
        {id: 1, brand: "Tesla"},
        {id: 2, brand: "BMW"},
        {id: 3, brand: "Toyota"},
        {id: 4, brand: "Honda"},
        {id: 5, brand: "Audi"}  
];

return(
    <>
    <h1>Who is the Garage?</h1>

    <ul>
        {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
    </ul>
    </>
);
}
function Car(props) {
    return <li>{props.brand}</li>
}



export { Room, Garage};