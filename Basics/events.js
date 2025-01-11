// HTML events are "things" that happen to HTML elements. When JavaScript is used in HTML pages, JavaScript can "react" on these events.


An HTML event can be something the browser does, or something a user does.

Here are some examples of HTML events:

    An HTML web page has finished loading
    An HTML input field was changed
    An HTML button was clicked
JavaScript lets you execute code when events are detected.


<element event='some JavaScript'>
or, <element event="some JavaScript">
  eg:
 <button onclick="document.getElementById('demo').innerHTML = Date()">The time is?</button> //  the JavaScript code changes the content of the element with id="demo".
  <button onclick="this.innerHTML = Date()">The time is?</button>  // the code changes the content of its own element (using this.innerHTML): 


  JavaScript code is often several lines long. It is more common to see event attributes calling functions:
  <button onclick="showTime()">The time is: <button>
  
Here is a list of some common HTML events:
Event 	Description
'onchange' 	An HTML element has been changed
'onclick' 	The user clicks an HTML element
'onmouseover' 	The user moves the mouse over an HTML element
'onmouseout' 	The user moves the mouse away from an HTML element
'onkeydown' 	The user pushes a keyboard key
'onload' 	The browser has finished loading the page

