import { useState } from 'react';

function ToDoItem({ todo }) {
    return <li>{ todo }</li>;
}

function ToDoApp() {
    const [todos, setTodos] = useState(["Learn react", "Build an app", "Never stop learning"]);

   const addTodos = () => {
    setTodos([...todos, "New Item"]);
   };

    return (
        <>
        <h1>My TODO list</h1>
        <ul>
            {
                todos.map((todo, index) => (
                    <ToDoItem key={index} todo={todo} />
                ))
            // note here, we've wrapped the arrow function body inside () instead of {}, if we wrap arrow function body inside (), we don't need to explicitly use the 'return' keyword (which is called implicit return), if we wrap function body inside {} we must use 'return' keyword (which is called explicit return). when using implicit return, if the function returns multiple JSX elements, they must be wrapped inside a single parent element (like fragment <></> or <div></div>) like we do in components. 

            }

        </ul>
        <button onClick={addTodos}>Add Todo</button>
        </>
    );
}

export default ToDoApp;
