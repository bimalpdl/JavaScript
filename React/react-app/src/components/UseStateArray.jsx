import { useState } from 'react';

function ToDoItem({ itemName }) {
  return <li>{itemName}</li>

}

const UseStateArray = () => {

  const [items, setItems] = useState(["Master React", "Learn Node", "Learn Express", "Learn MongoDB"]);

  function addItem() {
    setItems([...items, `Item ${items.length + 1}`]);
  };
  return (
    <>
    <h2>Todo App</h2>
    <ul>
     { 
       items.map((item, index) => (<ToDoItem key={index} itemName={item} />)
      
      )}     

    </ul>
    <button onClick={addItem}>Add Item on List.</button>
      
    </>

  );
}

export { UseStateArray };
