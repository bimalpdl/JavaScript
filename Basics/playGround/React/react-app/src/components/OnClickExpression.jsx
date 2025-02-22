import { useState } from "react";
function OnClickExpression() {
    const [count, setCount] = useState(0); 
    const paraStyle = {
        color: "red",
        fontSize: "2rem",
        display: "inline-block",
        padding: "15px"
    };

    const buttonStyle = {
        display: "block",
        padding: "10px",
        margin: "25px",
        color: "gray",
        fontSize: "1.5rem"
    }

    function ExplicitFunctionDeclaration() { {
        document.getElementById('paragraph').innerHTML = "Explicit function declaration is invoked.";
    }
    }

    const FunctionAsExpression = () => { document.getElementById('paragraph').innerHTML = "Function as expression is invoked."; }       

    return (
        <>
                {/* There are different ways we can embed expressions on event handling */}
                {/*Arrow function */}
            <button style={buttonStyle} onClick={() => setCount((count) => count + 1)}>Click me to increment by 1</button>
            <button style={buttonStyle} onClick={() => setCount((count) => count - 1 )}>Click me to decrement by 1</button>
            <p style={paraStyle}>{count}</p>

            <button  style={buttonStyle} onClick={ExplicitFunctionDeclaration}>Explicit function declaration</button>

            {/* using ES5 anonymous function */}
            <button style={buttonStyle} onClick={function() 
                {
                    return document.getElementById('paragraph').innerHTML = "ES5 anonymous funtion is invoked."
                }}>ES5 Anonymous Funtion</button>

                {/* Function as expression (using arrow function) */}
            <button style={buttonStyle} onClick={FunctionAsExpression}>Function as Expression</button>
            <p style={paraStyle} id="paragraph"></p>
        
        </>

    );
}

export default OnClickExpression;