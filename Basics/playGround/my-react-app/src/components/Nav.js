function Nav(props) {   {/* props is an object */}
{/* component name MUST start with uppercase letter */}
    return (
      <>  {/* These empty HTML tags are called fragments and are used when a component holds(or returns) more than one HTML tags.
      if a component holds more than one html elements within it, it MUST be enclosed inside a single parent element such as div or fragment(<> </>) this is because the react code is eventually gonna be convert to JS and HTML, and a JS function can return only one value.
      */}
      <h1>This is nav bar</h1>
      <nav className="nav-bar"> {/* 'class' keyword is reserved in JS so we use 'className' to assign class name inside HTML in react apps / components. */}
        <ul>
            <li>{props.name}</li>  {/* Using props, the navbar is now dynamic */}
            <li>{props.mail}</li>  {/* JS and other expression are placed inside curly braces {} to evaluate */}
            <li>{props.contact}</li>

        </ul>
      </nav>
      </>
    );
}

export default Nav;