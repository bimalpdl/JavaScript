// NOTE: props are immutable(can't be changed), and unidirectional (only parent can send data to the child but child can't send back to the parent or grandparent)
// It follows top to bottom component hierarchy in data flow.
function PropsChild({children}) {     {/* access props contents as object destructuring */}
    return (
        <>
        <h1>{children} </h1>
        {/* <h2>{props.name}</h2> */}
</>
    );
}

function Entity() {      {/* parent component*/}
    return (
        <Person name="Bimal" age="23" sex="male" />
    );
}

function Person(props) {   {/* child component*/}
    return(
    <div>{props.name} is <FullDetail age={props.age} sex={props.sex} />
    </div>
    );
}

function FullDetail(props) {   {/* grandchild component*/}
    return(
        <div>
            {props.age} years old and is {props.sex}.
        </div>
    );
}
export {Entity};
export default PropsChild;
