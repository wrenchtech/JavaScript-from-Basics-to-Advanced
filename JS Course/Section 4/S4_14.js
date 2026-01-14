//Comparación y operadores lógicos

console.clear()

if(5 == "5") {
    console.log(true); //El "==" ve si el valor es el mismo, no el tipo de valor
} else {
    console.log(false);
}

if(5 === "5") {
    console.log(true); //El "===" ve si el valor es el mismo, y tambien el tipo de valor
} else {
    console.log(false);
}

if(5 != 4) { //El "!=" significa "No es igual a"
    console.log(true); 
} else {
    console.log(false);
}

if(5 !== 5) {
    console.log(true); 
} else {
    console.log(false);
}                           //El !== de arriba nos dice que 5 y 5 tienen el mismo valor y tipo de valor asi que son iguales, por lo tanto es "false"
                            //El !== de abajo nos dice que 5 y "5" tienen el mismo valor pero como no son el mismo tipo de valor no son iguales, por lo tanto es "true"
if(5 !== "5") {
    console.log(true); 
} else {
    console.log(false);
}

if(15 < 15) { //"<" menor a
    console.log(true); 
} else {
    console.log(false);
}

if(15 <= 15) { //"<" menor o igual a
    console.log(true); 
} else {
    console.log(false);
}

if(15 > 15) { //">" mayor a
    console.log(true); 
} else {
    console.log(false);
}

if(15 >= 15) { //">" mayor o igual a
    console.log(true); 
} else {
    console.log(false);
}

//Operadores Lógicos: && (and), || (or), ! (no)
if(5 < 10 && 10 < 15) { //Si 5 es menor a 10 y 10 es menor a 15
    console.log(true); 
} else {
    console.log(false);
}

if(700 < 10 || 10 < 15) { //Si 700 es menor a 10 o 10 es menor a 15
    console.log(true); 
} else {
    console.log(false);
}

if(!(700 < 15)) { //El ! cancela o invierte
    console.log(true); 
} else {
    console.log(false);
}

//Operadores ternarios  ? a : b
2 < 3 ? console.log(true) : console.log(false) //"?" Funciona como if, mientras que ":" funciona como else