// If-else
console.clear

if(7>5) {
    console.log(true) //Si 7 es mayor a 5 nos devolvera el valor "true" (verdadero)
}

if(5>7) {
    console.log(true) //Si 5 es mayor a 7 nos devolvera "true"
} else {
    console.log(false) //Si esta condición no es verdad nos devolvera el valor "false" (falso)
}

if (5>7) {
    console.log("5 > 7") // Si 5 es mayor a 7 nos devolvera "5 > 7"
} else if(7>8){ //Si no lo es, se manda a llamar otro if
    console.log("7 > 8") //Si 7 es mayor a 8 nos devolvera "7 > 8"
} else { 
    console.log("Nada") //Si no lo es, se devuelve "Nada"
}