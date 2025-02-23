function PropsChild({children}) {     {/* access props contents as object destructuring */}
    return (
        <>
        <h1>{children} </h1>
        {/* <h2>{props.name}</h2> */}
</>
    );
}

export default PropsChild;