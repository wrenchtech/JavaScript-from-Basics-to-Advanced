// Switch

console.clear()

var currentDay = "Miercoles" //Se cambia el dia aqui manualmente para cambiar el resultado del if o del switch

if(currentDay === "Lunes") { //Igualdad (==) Verifica la igualdad de dos expresiones sin tener en cuenta el tipo de dato. Igualdad estricta (===) Hace lo mismo que el anterior, pero verificando también que coincidan los tipos de datos
    console.log("Horarios: 10:00-06:00")        //Si es martes en la variable "currentDay" se usa este horario y asi sucesivamente
} else if(currentDay === "Martes") {
    console.log("Horarios: 09:00-05:00")
} else if(currentDay === "Miercoles") {
    console.log("Horarios: 09:30-05:30")
} else if(currentDay === "Jueves") {
    console.log("Horarios: 10:15-06:15")
} else if(currentDay === "Viernes") {
    console.log("Horarios: 09:05-05:05")
} else if(currentDay === "Sábado") {
    console.log("Horarios: 09:00-05:00")
} else if(currentDay === "Domingo") {
    console.log("Horarios: 09:00-01:00")
}


switch(currentDay) {
    case "Lunes" :
        console.log("Horarios: 10:00-06:00")    //En ves de usar los if, al tener muchos valores para la variable se pueden usar switches, en los cuales se usan casos (En este caso Lunes, Martes, Miercoles, etc)
        break;
    case "Martes" :
        console.log("Horarios: 09:00-05:00")
        break;
    case "Miercoles" :
        console.log("Horarios: 09:30-05:30")
        break;
    case "Jueves" :
        console.log("Horarios: 10:15-06:15")
        break;
    case "Viernes" :
        console.log("Horarios: 09:05-05:05")
        break;
    case "Sábado" :
        console.log("Horarios: 09:00-05:00")
        break;
    case "Domingo" :
        console.log("Horarios: 09:00-01:00")
        break;

    default:
        console.log("Horarios: 09:00-01:00") //Si el valor de la variable no coincide con nada, se mete el valor default del switch
}