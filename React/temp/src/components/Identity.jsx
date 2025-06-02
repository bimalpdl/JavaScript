import './identity.css';
function Identity( {name, designation, department} ) {
    const people = [
      { name: "Bimal Paudel", age: 23, designation: "Software Engineer" },
      { name: "Nirmal Paudel", age: 24, designation: "Quality Assurance"},
      { name: "Rohini Paudel", age: 31, designation: "Product Manager"}
    ];
    return(
    <>
    <h1>There are {people.length } { people.length < 2 ? "person" : "peoples"} in the given list.</h1>
    
    
        <div className='container' >
            <div className="firstChild">
                <p>Name: {name}</p>
            </div>
            <div className="secondChild">
                <p>Designation: {designation}</p>
                <p>Department: {department}</p>
            </div>
          
          
        </div>
        </>
    );
}

export { Identity };