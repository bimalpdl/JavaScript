// TODO: The form is not displaying the alert, fit it.

/*
Multiple Input Fields
You can control the values of more than one input field by adding a name attribute to each element.
We will initialize our state with an empty object.
To access the fields in the event handler use the event.target.name and event.target.value syntax.
To update the state, use square brackets [bracket notation] around the property name.


*/

import { useState } from 'react';
function MultiFieldForms() {
    const [inputs, setInputs] = useState({});

    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value }))
    } 
    
    function handleSubmit (event) {
        event.preventDefault();
        alert(inputs);

    }
    return (
        <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", gap: "15px"}}>
            <label for="username">Enter your username: 
                <input type="text" name="username" id="username" 
                value={inputs.username || ""}
                onChange={handleChange} 
                autoComplete='off'/>
            </label>
            <label for="age">Enter your age: 
                <input name="age"
                type="number" 
                value={inputs.age || ""}
                onChange={handleChange}  />
            </label>
            <input type="button" value="submit" />

        </form>
    );
}

export { MultiFieldForms };