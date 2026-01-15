// JavaScript number-related functions
console.clear();

// Numeric values
var num1 = 10;
var num2 = 20.3;

// Numeric values stored as strings
var strNum1 = "10";
var strNum2 = "11.5";
var strNum3 = "ABC";

// Decimal number for rounding examples
var strDecimal = 87.987653;

// --------------------
// toString() converts a number into a string
console.log(num1.toString());
console.log(num2.toString());

// --------------------
// parseInt() converts a string into an integer (stops at decimals)
console.log(parseInt(strNum1));  // 10
console.log(parseInt(strNum2));  // 11
console.log(parseInt(strNum3));  // NaN

// --------------------
// parseFloat() converts a string into a decimal number
console.log(parseFloat(strNum2)); // 11.5
console.log(parseFloat(strNum3)); // NaN

// --------------------
// toFixed() rounds a number to a fixed number of decimals
console.log(strDecimal.toFixed());     // Rounds to nearest integer
console.log(strDecimal.toFixed(2));    // 2 decimal places
console.log(strDecimal.toFixed(10));   // 10 decimal places
