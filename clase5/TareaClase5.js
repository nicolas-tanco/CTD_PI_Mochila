//Ejercicio 1

function invertirOrden(array){
      let  a= array.pop()
      let b=array.pop()
      let c=array.pop()
       array.unshift(c)
       array.unshift(b)
       array.unshift(a)
            return array
}

console.log("ejercicio 1")
console.log( invertirOrden([1,2,3,4]))//[4,3,2,1]
console.log( invertirOrden([4,2,3,8]))//[8,3,2,4]
console.log( invertirOrden([1,9,3,0]))//[0,3,9,1]
console.log("----------------------------------")

//Ejercicio 2
function enteros(c){
    let entero=new Array
    if (c[0]%2==0)  entero.push(c[0])
    if (c[1]%2==0)  entero.push(c[1])
    if (c[2]%2==0)  entero.push(c[2])
    if (c[3]%2==0)  entero.push(c[3])
    return entero
}

console.log("ejercicio 2")
console.log(enteros([1,2,3,4]))//2,4
console.log(enteros([1,5,3,7]))//
console.log(enteros([8,2,6,4]))//8,2,6,4
console.log(enteros([1,3,6,4]))//6,4
console.log(enteros([7,9,3,5]))//
console.log("----------------------------------")



//Ejercicio 3
function tipoArray(dato,array){
     return typeof array[0] == dato && typeof array[1] == dato && typeof array[2] == dato && typeof array[3] == dato
}


console.log("ejercicio 3")
console.log(tipoArray("number",[1,2,3,4]))//true
console.log(tipoArray("number",[1,false,1,1]))//false
console.log(tipoArray("boolean",[true,false,true,false]))//true
console.log("----------------------------------")



//Ejercicio 4 

function sumatoria(c){
    if (tipoArray("number",c)==false){
        return "Error: array corrupto"
    } else{
        return c[0]+c[1]+c[2]+c[3]
    }
}


console.log("ejercicio 4")
console.log(sumatoria([1,false,1,1]))//error
console.log(sumatoria([1,2,1,1]))//5
console.log(sumatoria([1,"aaaa",1,1]))//error
console.log(sumatoria([1,10000,1,1]))//10003
console.log("----------------------------------")


//Ejercicio 5 
function saludo(q){                              //creo esta funcion para que haya mas funciones dentro de funciones
     return " y el resultado es "+q
}


function juntosALaPar(p){
    if (tipoArray("number",p)){
    return    "La sumatoria es "+sumatoria(p)+saludo(enteros(invertirOrden(p)))
    }else{
        return "Error: array corrupto"
    }
}

console.log("ejercicio 5")
console.log(juntosALaPar([1,2,3,4]))//da bien
console.log(juntosALaPar([1,2,"3",4]))//error
console.log(juntosALaPar([1,2,3,true]))//error
console.log(juntosALaPar([1,2,3,10000]))//da bien