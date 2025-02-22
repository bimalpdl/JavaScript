import { useState } from "react";
function ReactHook() {
    const [count, setCount] = useState(0);     {/* react hook 'useState' and JS destructuring is used here */}
    return (
        <>
        <h1>Hello There</h1>
        <button onClick={() => setCount((count) => count + 5)}>Click me to increment the value by 5</button>
        <p style={{fontSize: "1.5rem", color: "red"}}>{count}</p>
        </>

    );
}

export default ReactHook;