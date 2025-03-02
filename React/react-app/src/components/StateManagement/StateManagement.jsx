// TODO: the whole statemanagement component is buggy, fix it
import Fruit from './Fruit';

import FruitsCounter from './FruitsCounter';
import { useState } from 'react';

const StateManagement = () => {
  const [fruits] = useState([
      {id: 1, fruitName: "Apple"},
      {id: 2, fruitName: "Apple"},
      { id: 3, fruitName: "Banana"}
    ]);

    return (
      <div className = "App">
        <h1>Where am I supposed to go?</h1>
        <Fruit fruit={fruits} />
        <FruitsCounter fruits={fruits} />
      </div>
    );

}

export default StateManagement;