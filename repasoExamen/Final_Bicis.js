//Ejercicio 1 

const fs = require("fs")

const bicicletas = fs.readFileSync(__dirname + "/Bicicletas.json", "utf-8")

const arrayBicicletas = JSON.parse(bicicletas)

console.log("Ejercicio 1");

console.log(arrayBicicletas);

console.log("------------------------------------");
console.log("************************************");
console.log("------------------------------------");
console.log("************************************");

//Ejercicio 2

let carrera = {
    bicicletas: arrayBicicletas,

    bicisPorTanda: 7,

    bicicletasHabilitadas: function () {
        return this.bicicletas.filter(e => !e.doppingPositivo)
    },

    listarBicicletas: function (array) {
      array.forEach(e => console.log("Id: " + e.id + ", peso en Kg: " + e.pesoEnKg + ", rodado: " + e.rodado + ", estado: " + (e.doppingPositivo ? "descalificado" : "habilitado")))
    },

    buscarPorID: function (id) {
        return this.bicicletas.find(e => e.id === id)
    },

    buscarPorRodado: function (rodado) {
        return this.bicicletasHabilitadas().filter(e => e.rodado <= rodado)
    },

    ordenarPorRodado: function () {
        return this.bicicletas.sort((a, b) => a.rodado - b.rodado)
    },

    generarTanda: function (rodado, peso) {

        let bicisPrimerFiltro = this.buscarPorRodado(rodado).filter(e => e.pesoEnKg <= peso)

        if (bicisPrimerFiltro.length <= this.bicisPorTanda) {
            return bicisPrimerFiltro
        } else {
            return bicisPrimerFiltro.slice(0, 7)
        }
    },

    calcularPodio: function (rodado, peso) {

        let tanda = this.generarTanda(rodado, peso)

        let podio = tanda.sort((a, b) => -(a.puntaje - b.puntaje))

        console.log("El ganador es: " + podio[0].ciclista + ", con un puntaje de: " + podio[0].puntaje + ". El segundo puesto es para: " + podio[1].ciclista + ", con un puntaje de: " + podio[1].puntaje + " y el tercer puesto es para: " + podio[2].ciclista + ", con un puntaje de: " + podio[2].puntaje)
    }

}


console.log("Ejercio A: bicicletas");
console.log(carrera.bicicletas);
console.log("----------------------------------");
console.log("**********************************");
console.log("----------------------------------");

console.log(" ");
console.log(" ");

console.log("Ejercicio c: bicicletasHabilitadas");
console.log(" ");
carrera.listarBicicletas(carrera.bicicletasHabilitadas())
console.log("----------------------------------");
console.log("**********************************");
console.log("----------------------------------");

console.log(" ");
console.log(" ");

console.log("Ejercicio D: listarBicicletas");
console.log(" ");
carrera.listarBicicletas(carrera.bicicletas)
console.log("----------------------------------");
console.log("**********************************");
console.log("----------------------------------");

console.log(" ");
console.log(" ");

console.log("Ejercicio E: buscarPorID");
console.log(" ");
console.log("busco id=0");
console.log(carrera.buscarPorID(0))
console.log("----------------------------------");
console.log("busco id=5");
console.log(carrera.buscarPorID(5))
console.log("----------------------------------");
console.log("busco id=9");
console.log(carrera.buscarPorID(9))
console.log("----------------------------------");
console.log("**********************************");
console.log("----------------------------------");

console.log(" ");
console.log(" ");

console.log("Ejercicio F: buscarPorRodado");
console.log(" ");
console.log("rodado<=65");
console.log(" ");
carrera.listarBicicletas(carrera.buscarPorRodado(65))
console.log("----------------------------------");
console.log("**********************************");
console.log("----------------------------------");

console.log(" ");
console.log(" ");

console.log("Ejercicio G: ordenarPorRodado");
console.log(" ");
carrera.listarBicicletas(carrera.ordenarPorRodado())
console.log("----------------------------------");
console.log("**********************************");
console.log("----------------------------------");

console.log(" ");
console.log(" ");

console.log("Ejercicio H: generarTanda");
console.log(" ");
console.log("Pruebo incluyendo a todas las habilitadas primero:");
carrera.listarBicicletas(carrera.generarTanda(70, 10))
console.log(" ");
console.log("Ahora filtrando más:");
carrera.listarBicicletas(carrera.generarTanda(65, 8.5))
console.log("----------------------------------");
console.log("**********************************");
console.log("----------------------------------");

console.log("Ejercico I: podio");
console.log(" ");
carrera.calcularPodio(70, 10)
console.log("---------------");
carrera.calcularPodio(65, 8.5)