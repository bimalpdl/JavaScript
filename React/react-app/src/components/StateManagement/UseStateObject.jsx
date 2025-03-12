import { useState } from 'react';

const UseStateObject = () => {
    const [user, setUser] = useState({name: "Bimal", age: 23});

    function incrementAge () {
        setUser({...user, age: user.age + 1})    // we use spread operator to update Array or Object
    }

    function decrementAge() {
     
        return setUser({...user, age: user.age -1})
        
    }
    return (
        <>
        <h1>Name: {user.name}</h1>
        <h1>Age: {user.age}</h1>
        <button onClick={incrementAge} >Increment Age</button>
        <button onClick={() => (decrementAge(user.age))}>Decrement Age</button>
          
        
        </>
    );
}

export {UseStateObject};