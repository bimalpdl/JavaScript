import { useState } from "react";

function Forms() {
 const [name, setName] = useState("");

 function HandleSubmit(event) {      // or  const HandleSubmit = (event) => {}
    event.preventDefault;
    alert(`Hello, ${name}! How are you doing today?`);
 }


    return (
        <>
        <form onSubmit={HandleSubmit}>
            <label htmlFor="name" style={{fontSize: "1.5rem"}}>Enter your name: 
              <input type="text" value={name} id="name" onChange={ (e) => setName(e.target.value)}  style={{border: "1px solid red", margin: "25px", padding: "10px"}} autoComplete="off"/> 
            </label>
            <input type="submit" value="Submit Form!!" />
        </form>
        </>
    );
}


export {Forms};