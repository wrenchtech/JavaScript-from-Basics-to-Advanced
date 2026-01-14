// JS String Functions
console.clear();

// Definición de las cadenas de texto
var MyFirstString = "This is a string for JS Script Functions";
var MySecondString = "This is a string for JavaScript Script Functions, JavaScript";

// Imprimir la longitud de MyFirstString
console.log(MyFirstString.length); // Te da el número de caracteres del string completo

// Encontrar la posición de "JS" en MyFirstString
console.log(MyFirstString.indexOf("JS")); // Te da el índice (posición en número) de una palabra
console.log(MyFirstString.indexOf("This")); // El conteo empieza en 0

// Encontrar la primera y última posición de "JavaScript" en MySecondString
console.log(MySecondString.indexOf("JavaScript")); // Primer "JavaScript" en el string
console.log(MySecondString.lastIndexOf("JavaScript")); // Índice de la última aparición de "JavaScript"

// Extraer una parte de MyFirstString
console.log(MyFirstString.slice(0, 5)); // Te da una "rebanada" del string, en este caso del caracter 0 al 5
console.log(MySecondString.slice(21, 31));

// Ejemplo adicional: Manejar el caso donde la palabra no se encuentra
console.log(MyFirstString.indexOf("notInString")); // Devuelve -1 porque la palabra no está en la cadena

console.log(MySecondString.slice(-10)); // Empieza de derecha a izquierda
console.log(MySecondString.slice(5)); // Devuelve todo despues de un caracter determinado

console.log(MyFirstString.substr(21))
console.log(MyFirstString.substr(21, 10)) //Despues del primer caracter elegido, eliges el tamaño de la "rebanada" que quieres del string

