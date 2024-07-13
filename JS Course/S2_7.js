// JS String Functions
console.clear()
var MyFirstString = "This a string for JS Script Functions"
var MySecondString = "This a string for JavaScript Script Functions, JavaScript"

console.log(MyFirstString.length) // Te da el número de letras del string completo

console.log(MyFirstString.indexOf("JS")) // Te da el index (locación en número) de una palabra
console.log(MyFirstString.indexOf("This")) // El conteo empieza en 0

console.log(MySecondString.indexOf("JavaScript")) //Primer "Javascript" en el string
console.log(MySecondString.lastIndexOf("JavaScript")) //Se usa para ver el index de la ultima locación de una palabra en específico
                                                      //en este caso "JavaScript"