// Regular expressions can be used to perform all types of text search and text replace operations.
// syntax: /pattern/modifiers;     => /hello/i    => search match for 'hello' where the matches are case in-sensitive
// In JavaScript, regular expressions are often used with the two string methods: search() and replace().
let text = "Hello there, how are you doing today?";
let position = text.search("today"); // search() method returns the position of the match.
console.log(position);  // 30
// let position = text.search("Today");   # won't return anything since by default, search() method is case sensitive.

// in order to perform case-insensitive pattern search using search() method, we'll need to employ the regex as:
position = text.search(/THERE/i);    // searches for case-insensitive pattern 'there'.
console.log(position);   // 6

// let alteredText = text.replace("hello", "Hola");    // won't change the original text since replace() method is case sensitive.
let alteredText = text.replace(/HeLLo/i, "Hola");    // searches for case-insensitive pattern 'hello'
console.log(alteredText);

// other regex patterns can also be used. Like [abc], (x|y) etc.
