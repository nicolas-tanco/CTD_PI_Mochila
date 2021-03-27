function puedeSubir(alt, acom) {
    if (alt < 200 && alt > 140) {
        return true
    }
    else if (alt < 140 && alt > 120 && acom == true) {
        return true
    }
    else {
        return false
    }
}

//function puedeSubir1(alt, acom) {
//    switch (alt, acom) {
//      case alt < 200 && alt > 140:
//         return true

//    case alt < 140 && alt > 120 && acom == true:
//      return   true

//    default:
//       return false;
// }
//}

function puedeSubir1(alt, acom) {
    return (alt < 200 && alt > 140) ? true : ((alt < 140 && alt > 120 && acom == true) ? true : false)
}

console.log(puedeSubir1(150, true))//true
console.log(puedeSubir1(150, false))//true
console.log(puedeSubir1(210, true))//false
console.log(puedeSubir1(201, false))//false
console.log(puedeSubir1(130, true))//true
console.log(puedeSubir1(130, false))//false
console.log(puedeSubir1(110, false))//false


function precioSandwich(tomate,huevo,papa){
    tomate==true?tomate=20:0
    huevo==true?huevo=60:0
    papa==true?papa=50:0
    return 150+tomate+huevo+papa
}

console.log(precioSandwich(true,true,true))
//