//ej2
let suma = function (a, b) {
    return a + b
}
let resta = function (a, b) {
    return a - b
}
let multiplicacion = function (a, b) {
    return a * b
}
let division = function (a, b) {
    return a / b
}
//3
let nombreJugador
let golesJugador = 10
let precioEnDolares = 100000
function f(c) {
    return c = ++c
}
function z(x) {
    return x + 10000
}
function hacerGol(a, b) {
    console.log('GOL!!!!')
    console.log(a, b)
}
hacerGol(f(golesJugador), z(precioEnDolares))



//ej4

function hattrick() {
    hacerGol(f(golesJugador), z(precioEnDolares))
    hacerGol(f(f(golesJugador)), z(z(precioEnDolares)))
    hacerGol(f(f(f(golesJugador))), z(z(z(precioEnDolares))))
    console.log(z(z(z(precioEnDolares))) * 1.1)
}
hattrick()