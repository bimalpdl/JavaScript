import {useState}  from 'react';
function ToggelButton() {
    const [isOn, setIsOn] = useState(true);
    return (
        <>
       
        <h1>The button is: {isOn? "ON" : "OFF"}</h1>
        <button onClick={() => setIsOn(!isOn)}>Toggle</button>


        </>
    );
}

export default ToggelButton;