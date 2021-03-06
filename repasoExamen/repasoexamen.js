const fs = require("fs")

const departamentos = fs.readFileSync(__dirname + "/departamentos.json", "utf-8")

const arrayDepartamentos = JSON.parse(departamentos)


console.log("---------Departamentos--------");
console.log(arrayDepartamentos);
console.log("-------------------------");



const inmobiliaria = {
    departamentos: arrayDepartamentos,

    departamentosDisponibles: function () {
        return this.departamentos.filter(e => e.disponible)
    },

    listarDepartamentos: function (arr) {
        arr.forEach(e => console.log(e.id, e.precioAlquiler, e.disponible ? "Disponible" : "Alquilado"))
    },
    buscarPorId: function (id) {
        return this.departamentos.find(e => e.id === id)
    },
    buscarPorPrecio: function (precio) {
        return this.departamentosDisponibles().filter(e => e.precioAlquiler <= precio)
    },
    ordenarPorPrecio: function (array) {
        return array.sort((a, b) => a.precioAlquiler - b.precioAlquiler)
    },
    precioConImpuesto: function (imp) {
        this.departamentos.forEach(e => e.precioAlquiler = e.precioAlquiler * (1 + imp / 100))
    },
    alquilado: function (id) {
        this.buscarPorId(id).disponible = false
    },
    ingreso: function () {
        return this.departamentos.filter(e => !e.disponible).reduce((a, b) => a + b.precioAlquiler, 0)
    },
    comentario: function (id, comentario, puntuacion) {
        this.buscarPorId(id).comentarios.push({ comentario: comentario, puntuacion: puntuacion })
        console.log("Comentario realizado con éxito");
    },
    preferenciasCliente: function(habitaciones,mascotas,cantPersonas,precio){
      return  this.departamentosDisponibles().filter(e=>e.cantidadHabitacion===habitaciones && e.mascotas===mascotas && e.cantidadPersonas===cantPersonas && e.precioAlquiler===precio)
    }
}

console.log("--------departamentosDisponibles");
console.log(inmobiliaria.departamentosDisponibles());
console.log("-------------------------")

console.log("-------- listarDepartamentos");
console.log(inmobiliaria.listarDepartamentos(inmobiliaria.departamentos));
console.log("-------------------------")

console.log("-------- buscarPorId");
console.log(inmobiliaria.buscarPorId(17));
console.log("-------------------------")

console.log("-------- buscarPorPrecio");
console.log(inmobiliaria.buscarPorPrecio(1000));
console.log("-------------------------")


console.log("--------ordenarPorPrecio");
console.log(inmobiliaria.ordenarPorPrecio(inmobiliaria.departamentos));
console.log("-------------------------")

inmobiliaria.precioConImpuesto(50)
console.log("--------precioConImpuesto");
console.log(inmobiliaria.departamentos);
console.log("-------------------------")

console.log("--------alquilado");
inmobiliaria.alquilado(17)
console.log(inmobiliaria.buscarPorId(17));
console.log("-------------------------")

console.log("--------ingreso");
console.log(inmobiliaria.ingreso());
console.log("-------------------------")

console.log("--------comentario");
inmobiliaria.comentario(17,"bueno",8)
console.log(inmobiliaria.buscarPorId(17));
console.log("-------------------------")








