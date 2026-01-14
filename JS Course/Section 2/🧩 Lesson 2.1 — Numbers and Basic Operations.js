// Numbers in JavaScript
console.clear();

// JavaScript uses a single number type for integers and decimals
var num1 = 10;    // Integer
var num2 = 10.9;  // Decimal
var num3 = 15;

// typeof shows the data type of a value
console.log(typeof(num1));
console.log(typeof(num2));

// --------------------
// Addition
var sum = num3 + num1 + num2;
console.log(sum);

// Subtraction
var res = num3 - num1;
console.log(res);

// Multiplication
var mul = num3 * num1;
console.log(mul);

// Multiplying a number by a string results in NaN (Not a Number)
var mulByString = num3 * "A";
console.log(mulByString);
console.log(typeof(mulByString));

// --------------------
// Division
var div = num3 / num1;
console.log(div);

// Dividing by zero returns Infinity
var divByZero = num3 / 0;
console.log(divByZero);
console.log(typeof(divByZero));
