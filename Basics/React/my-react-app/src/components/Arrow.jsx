const Arrow = props => `Hello ${props.name}`;   {/* Function that acceps only one parameter and single return statement*/}
const Arrow1 = (props) => {
    return(
        <ul>
            <li>Hello, {props.first}</li>
            <li>Hola, {props.second}</li>
            <li>Namaste, {props.third}</li>
        </ul>
    );
}


export {Arrow, Arrow1};  {/* Named export */}
