let vehiculo
let km
let litros


function gastoEnComustible(km, vehiculo, litros) {
        switch (vehiculo) {
        case "moto":
            return (km * litros * 0.2)
            break
        case "auto":
            return (km * litros * 0.1)
            break
        default:
            return (km * litros * 0.5)
    }
}
console.log(gastoEnComustible(66,"ca",50))

/////////////////////////

function geometria(lados) {
    switch (lados) {
        case 3:
            console.log("triangulo")
            break
        case 4:
            console.log("cuadrado")
            break
        default:
            console.log("otro")

    }

}

geometria(3)
geometria(4)

////////////////////////////////

