// JS String Functions 2

console.clear()
var exampleString = "Este es un tutorial de JavScript"

console.log(exampleString.toUpperCase()) //Hace el string MAYÚSCULAS
console.log(exampleString.toLowerCase()) //Hace el string minúsculas

var firstName = "Kuro"
var lastName = "Tech"

console.log(exampleString.concat(firstName)) // Concatena (junta o une) strings
console.log(exampleString.concat(" ", firstName, " ", lastName)) // Asi se agregan los espacios si es necesario o no estan en la variable
console.log(firstName + " " + lastName + " " +  exampleString) // Tambien se pueden usar "+" para concatenar strings

var extraSpaceString = "                mi string     "
console.log(extraSpaceString.trim()) //Quita espacios extras o de más antes y despues del texto pero no en medio

var charAtExampleString = "Este es mi string de prueba"
console.log(charAtExampleString.charAt(5)) // Das la ubicacion en el string de un caracter (char) y te devuelve el caracter seleccionado
console.log(charAtExampleString.charAt(11))

var sampleString = "This is my sample string" // Separa los strings en las bases de los argumentos
console.log(sampleString.split(" "))

var sampleString2 = "This,is,my,sample,string"
console.log(sampleString2.split(","))