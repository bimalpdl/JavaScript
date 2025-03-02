// TODO: add object based inline css and other css properties.
import './Styling.css';
function Styling() {
    const styles = {
      color: "red",
      fontSize: "1.5rem",
      fontWeight: "700"
    };
  
    return(
     <>
     <div className="headerContainer">
        <h1>I am heading.</h1>
        <h2>I am subheading.</h2>
     </div>
     <h1 style={{color:"green", fontSize:"25px"}}>Hello there, I contain inline css</h1>  
     {/* since it's just JavaScript, those CSS properties that would be hyphenated in plain CSS, such as, for example, font-size:40px, become camelCased, and the value is a string, making it look like this: fontSize:"40px". */}

     {/*
     
     Besides inlining a style object literal, you can also save it in a variable, and then use that variable instead of passing an object literal.
     */}
    <p style={styles}>Hello I am paragraph tag.</p>   


     </>


    );
}

export default Styling;