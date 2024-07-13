// Funciones JS
console.clear;
var num1 = 10
var num2 = 20.3
var strNum1 = "10"
var strNum2 = "11.5"
var strNum3 = "ABC"
var strDecimal = 87.987653

// toString() pones número y te da un string
console.log(num1.toString());
console.log(num2.toString());

// parseInt() pones un número string y te da un número entero
console.log(parseInt(strNum1));
console.log(parseInt(strNum2));
console.log(parseInt(strNum3));

// parseFloat pones un numero string y te da un número con su decimal
console.log(parseFloat(strNum2));
console.log(parseFloat(strNum3));

// toFixed pones número decimal y lo redondea
console.log(strDecimal.toFixed());
console.log(strDecimal.toFixed(2)); 
console.log(strDecimal.toFixed(10)); //Se determina a cuantas decimales se redondea