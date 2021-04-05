for (let i = 1; i <= 10; i++) {
    console.log(i * 7)
}

for (let n = 0; n < 10; n++) {
    console.log("el valor de n = " + n)
}

function noParesDeContarImparesHasta(numero) {
    let k = 0
    for (i = 1; i <= numero; i++) {
        if (i % 2 != 0) {
            k++
        }
    }
    return k
}

console.log(noParesDeContarImparesHasta(10000))

let tengoQueTrabajar = dia => !(dia == "sabado" || dia == "domingo")

console.log(tengoQueTrabajar("lunes"))
console.log(tengoQueTrabajar("sabado"))
console.log(tengoQueTrabajar("domingo"))
console.log(tengoQueTrabajar("martes"))
console.log(tengoQueTrabajar("viernes"))

function agregarHttp(url) {
    return "http://" + url
}

function procesar(a, callback) {
    let arr = new Array(a.lenght)
    for (let i = 0; i < a.length; i++) {
        arr[i] = callback(a[i])
    }
    return arr
}


console.log(procesar(["ww", "gg"], agregarHttp))

