import { useState } from "react";

function Forms() {
 const [names, setNames] = useState("");
    return (
        <>
        <form action="">
            <input type="text" value={names} id="names" onChange={ (e) => setNames(e.target.value)} />
        </form>
        <h1>Hello {names}</h1>
        </>
    );
}

export {Forms};