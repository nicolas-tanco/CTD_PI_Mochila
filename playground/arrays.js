let notas = [2,3,4,5,6,7]

notas.push(8,9)
let borre=notas.pop()

console.log(notas)
let sh=notas.shift(5)///// por mas de que le puse 2 borro solo el primero

console.log(notas)
console.log(sh)
notas.unshift(1)


console.log(borre)
console.log(notas)

notas.unshift(3,9)
console.log(notas)

console.log(notas.indexOf(7))
console.log(notas.indexOf(12))
console.log(notas.join(" "))

let estudiantes = [
    {
      nombre: "Alvaro",
      promedio: 9,
      curso: "Android"
    },
    {
      nombre: "Daniel",
      promedio: 6,
      curso: "Full Stack"
    },
    {
      nombre: "Alexis",
      promedio: 3,
      curso: "iOS"
    }
  ];

  let alumnoEgresado=estudiantes.pop()
  console.log(alumnoEgresado)

  estudiantes.push (
    {
      nombre: 'Juan',
      promedio: 5,
      curso: 'iOS',
     },
     {nombre: 'Miguel',
     promedio: 2,
     curso: 'Android',
     }
   )

console.log(estudiantes)

console.log(Math.round(0.1))


function esNavidad(fecha) {
    let fechaDato = new Date(fecha)
    let mes = fechaDato.getMonth()
    let dia = fechaDato.getDate()
    return (dia == 25 && mes == 11) ? true : false
}

console.log(esNavidad('December 17, 1995 03:24:00'))//false
console.log(esNavidad('December 25, 1995 03:24:00'))//true
console.log(esNavidad('January 17, 1995 03:24:00'))//false
console.log(esNavidad('12-17-1995'))//false
console.log(esNavidad('12-25-1995'))//true
console.log(esNavidad('12-25-2021'))//true
console.log(esNavidad('12-26-2021'))//false


console.log(false+2)