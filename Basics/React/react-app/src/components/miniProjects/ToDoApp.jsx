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
            }

        </ul>
        <button onClick={addTodos}>Add Todo</button>
        </>
    );
}

export default ToDoApp;