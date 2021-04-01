//Consigna if ternario
function semaforoPeatonal(luzVerde){
    return luzVerde? "Puede pasar": "Espere"
}

console.log("ejercicios if ternario")
console.log(semaforoPeatonal(true))//Puede pasar
console.log(semaforoPeatonal(false))//"espere"
console.log("-----------------")


function esMayorDeEdad (edad){
    return edad>=18? "Es mayor": "Es menor"
}

console.log(esMayorDeEdad(17))//es menor
console.log(esMayorDeEdad(18))//es mayor
console.log(esMayorDeEdad(19))//es mayor
console.log(esMayorDeEdad(35))//es mayor
console.log(esMayorDeEdad(5))//es menor
console.log("-----------------")

//Ejemplo

function salirACorrer(buenTiempo){
    return buenTiempo?"Hoy se corre":"Estudia programacion imperativa"
}

console.log(salirACorrer(true))//hoy se corre
console.log(salirACorrer(false))//estudia programacion imperativa
console.log("-----------------")

function esBuenGolfista(handicap){
    return handicap<10?"Es bueno":"Es malo"
}

console.log(esBuenGolfista(9))//es bueno
console.log(esBuenGolfista(8))//es bueno
console.log(esBuenGolfista(11))//es malo
console.log(esBuenGolfista(36))//es malo
console.log("-----------------")


//Ejercicio 1
function esPar(numero) {
    return numero % 2 === 0    //Si la funcion esPar es true significa que numero es par
}


console.log("ejercicio 1")
console.log(esPar(1))//false
console.log(esPar(2))//true
console.log(esPar(6))//true
console.log(esPar(11))//false
console.log(esPar(18))//true
console.log(esPar(9))//flase
console.log("-----------------")


//Ejercicio2

let pago=Boolean
function subeBarrera(pago){
    return pago     //pago es boolean y si es true entonces subeBarrera (que tambien es boolean) es true por lo que ambas son iguales
}

console.log("ejercicio 2")
console.log(subeBarrera(false))//false
console.log(subeBarrera(true))//true
console.log("-----------------")



//Ejercicio 3
function tengoSuerte(numero) {                //Me parecio mejor poner la variable numeroAleatorio dentro de la funcion porque cada vez que eligo un numero, el numero aleatorio tiene que cambiar
    let numeroAleatorio = Math.round((Math.random() * 10))   //Como el intervalo de valores que este ejercicio puede tomar son los numeros enteros [0,10] multiplique math.random por 10. Puse el math.round() para que el numero aleatorio sea entero y este el 10 incluido
    console.log(numero, numeroAleatorio) //este console.log() esta para poder comparar el numero aleatorio con el que elegi por la terminal y verificar si mi funcion es correcta
    return numero === numeroAleatorio 
}

console.log("ejercicio 3")
console.log(tengoSuerte(1))
console.log(tengoSuerte(1))
console.log(tengoSuerte(1))
console.log(tengoSuerte(1))
console.log(tengoSuerte(1))
console.log(tengoSuerte(1))
console.log("---------------")




//Ejercicio 4


function esNavidad(fecha) {                            //lo hice de esta manera porque pienso que la consigna se refiere a la navidad de todos los años, no solo de este año
    let fechaDato = new Date(fecha)                    //esto esta para convertir en fecha al string
    return fechaDato.getDate() === 25 && fechaDato.getMonth() === 11   //pregunto si el dia es 25 y si el mes diciembre entonces sí es navidad
}
console.log("ejercicio 4")
console.log(esNavidad('December 17, 1995 03:24:00'))//false
console.log(esNavidad('December 25, 1995 03:24:00'))//true
console.log(esNavidad('January 17, 1995 03:24:00'))//false
console.log(esNavidad('12-17-1995'))//false
console.log(esNavidad('12-25-1995'))//true
console.log(esNavidad('12-25-2021'))//true
console.log(esNavidad('12-26-2021'))//false
console.log("---------------")



//Ejercico 5

function diasPorMes(mes) {     
    switch (mes) {
        case "abril":
        case "junio":
        case "septiembre":
        case "noviembre":
            return 30;
        case "febrero":
            return 28;
        default:
            return 31
    }
}
console.log("ejercicio 5")
console.log(diasPorMes("enero"))
console.log(diasPorMes("febrero"))
console.log(diasPorMes("marzo"))
console.log(diasPorMes("abril"))
console.log(diasPorMes("mayo"))
console.log(diasPorMes("junio"))
console.log(diasPorMes("julio"))
console.log(diasPorMes("agosto"))
console.log(diasPorMes("septiembre"))
console.log(diasPorMes("octubre"))
console.log(diasPorMes("noviembre"))
console.log(diasPorMes("diciembre"))
console.log("---------------")


//Ejercicio 6

function calificacion(nota) {
    return nota < 4 ? "recursa" : (nota < 7 ? "recuperatorio" : "aprobado")      
}
console.log("ejercicio 6")
console.log(calificacion(1))//recursa
console.log(calificacion(2))//recursa
console.log(calificacion(3))//recursa
console.log(calificacion(4))//recuperatorio
console.log(calificacion(5))//recuperatorio
console.log(calificacion(6))//recuperatorio
console.log(calificacion(7))//aprobado
console.log(calificacion(8))//aprobado
console.log(calificacion(9))//aprobado
console.log("---------------")



//Ejercicio 7

function abrirParacaidas(altura, velocidad) {
    return 2000 <= altura && altura <= 3000 && velocidad < 1000
}

console.log("ejercicio 7")
console.log(abrirParacaidas(4000, 900))//false
console.log(abrirParacaidas(2000, 900))//true
console.log(abrirParacaidas(3000, 900))//true
console.log(abrirParacaidas(1000, 900))//false
console.log(abrirParacaidas(2200, 9900))//false
console.log(abrirParacaidas(4000, 9009))//false
console.log("---------------")


//Ejercicio 8

function precioSandwich(tomate, huevo, papa) {   //Aqui quise hacer algo distinto a la respuesta dada en clase
    if (tomate)  tomate = 20     // el valor numerico de false es 0 por lo que no hace falta agregar otro termino. 
    if (huevo)   huevo = 60
    if (papa)    papa = 50 
    return 150 + tomate + huevo + papa
}


console.log("ejercicio 8")
console.log(precioSandwich(true, true, true))// 280
console.log(precioSandwich(true, false, true))// 220
console.log(precioSandwich(true, true, false))// 230
console.log(precioSandwich(true, false, false))// 170
console.log(precioSandwich(false, false, false))// 150
console.log("---------------")



//Consigna switch

function estacion(mes){
    switch(mes){
        case "enero":
        case "febrero":
            return "verano";
        case "marzo":
            return "verano/otoño";
        case "abril":
        case "mayo":
            return "otoño";
        case "junio":
            return "otoño/invierno";
        case "julio":
        case "agosto":
            return "invierno";
        case "septiembre":
            return "invierno/primavera";
        case "octubre":
        case "noviembre":
            return "primavera";
        default:
            return "primavera/verano"
    }
}

console.log("ejercicio switch")
console.log(estacion("enero"))//verano
console.log(estacion("febrero"))//verano
console.log(estacion("marzo"))//verano/otoño
console.log(estacion("abril"))//otoño
console.log(estacion("mayo"))//otoño
console.log(estacion("junio"))//otoño/invierno
console.log(estacion("julio"))//invierno
console.log(estacion("agosto"))//invierno
console.log(estacion("septiembre"))//invierno/primavera
console.log(estacion("octubre"))//primavera
console.log(estacion("noviembre"))//primavera
console.log(estacion("diciembre"))//primavera/verano
