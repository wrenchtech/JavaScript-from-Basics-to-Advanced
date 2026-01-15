// String functions in JavaScript
console.clear();

// Text values stored as strings
var myFirstString = "This is a string for JS Script Functions";
var mySecondString = "This is a string for JavaScript Script Functions, JavaScript";

// --------------------
// length returns the total number of characters
console.log(myFirstString.length);

// --------------------
// indexOf returns the position of the first match (starts at 0)
console.log(myFirstString.indexOf("JS"));
console.log(myFirstString.indexOf("This"));

// lastIndexOf returns the position of the last match
console.log(mySecondString.indexOf("JavaScript"));
console.log(mySecondString.lastIndexOf("JavaScript"));

// --------------------
// slice extracts part of a string using start and end indexes
console.log(myFirstString.slice(0, 5));
console.log(mySecondString.slice(21, 31));

// indexOf returns -1 when the value is not found
console.log(myFirstString.indexOf("notInString"));

// Negative values start counting from the end
console.log(mySecondString.slice(-10));

// If only one value is provided, it slices until the end
console.log(mySecondString.slice(5));

// --------------------
// substr extracts a string using start index and length
console.log(myFirstString.substr(21));
console.log(myFirstString.substr(21, 10));
