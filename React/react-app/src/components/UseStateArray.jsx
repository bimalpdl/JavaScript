// TODO: this code contins bug, fix it

function UseStateArray() {
    const [items, setItems] = useState([]);
  
    const addItem = () => {
      setItems([...items, `Item ${items.length + 1}`]);
    };
  
    return (
      <div>
        <button onClick={addItem}>Add Item</button>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }

 export {UseStateArray};
  