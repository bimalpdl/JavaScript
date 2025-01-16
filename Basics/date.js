
const date = new Date();
console.log(`toUTCString(): ${date.toUTCString()}`);
console.log(`toDateString(): ${date.toDateString()}`);
console.log(`toISOString(): ${date.toISOString()}`);

// Date objects are created with the new Date() constructor.
// There are 9 ways to create a new date object:
/*
new Date()
new Date(date string)  // const d = new Date("October 13, 2014 11:13:00"); or  const d = new Date("2022-03-25"); 

new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(year,month,day,hours,minutes,seconds,ms)
new Date(milliseconds) 

new Date(year, month, ...) creates a date object with a specified date and time.
7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order):
const d = new Date(2018, 11, 24, 10, 33, 30, 0);

NOTE: JavaScript counts months from 0 to 11: January = 0. December = 11.
6 numbers specify year, month, day, hour, minute, second:
const d = new Date(2025, 1, 16, 09, 51, 50);

5 numbers specify year, month, day, hour, and minute:
const d = new Date(2025, 1, 16, 09, 51);
and so on.

2 numbers specify year and month:
const d = new Date(2025, 11);

NOTE: You cannot omit month. If you supply only one parameter it will be treated as milliseconds.

One and two digit years will be interpreted as 19xx:
const d = new Date(99, 11); // 1999 November
*/









