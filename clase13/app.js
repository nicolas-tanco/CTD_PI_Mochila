//let clases=require("./clase.json")
//
//console.log(clases);

let fs = require("fs")



let clase = fs.readFileSync("./clase.json", "utf-8")
console.log(clase);


let arrayClase = JSON.parse(clase)
console.log(arrayClase);

function filterClases(titulo, array) {

    let arrayAux = []

    for (let index = 0; index < array.length; index++) {
        const clase = array[index];

        if (clase.titulo === titulo) {
            arrayAux.push(clase)
        }

    }
    return arrayAux
}


console.log(filterClases("front end", arrayClase));


function filterEstado(array, estado) {

    return array.filter(e => e.estado === estado)
}

console.log(filterEstado(arrayClase, "terminada"));