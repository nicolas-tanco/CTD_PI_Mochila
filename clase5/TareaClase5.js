

function invertirOrden(array){
      let  a= array.pop()
      let b=array.pop()
      let c=array.pop()
       array.unshift(c)
       array.unshift(b)
       array.unshift(a)
            return array
}


console.log( invertirOrden([1,2,3,4]))

function enteros(c){
    let entero=new Array
    if (c[0]%2==0)  entero.push(c[0])
    if (c[1]%2==0)  entero.push(c[1])
    if (c[2]%2==0)  entero.push(c[2])
    if (c[3]%2==0)  entero.push(c[3])
    return entero
}

console.log(enteros([1,2,3,4]))
console.log(enteros([1,5,3,7]))
console.log(enteros([8,2,6,4]))
console.log(enteros([1,3,6,4]))
console.log(enteros([8,2,3,5]))


function tipoArray(dato,array){
     return typeof array[0] == dato && typeof array[1] == dato && typeof array[2] == dato && typeof array[3] == dato
}

console.log(tipoArray("number",[1,2,3,4]))
console.log(tipoArray("number",[1,false,1,1]))

function enteros1(c){
    if (tipoArray("number",c)==false){
        return "Error: array corrupto"
    } else{
        return c[0]+c[1]+c[2]+c[3]
    }
}

console.log(enteros1([1,false,1,1]))

function saludo(q){
     return " y el resultado es "+q
}


function todo(p){
    if (tipoArray("number",p)){
    return    "La sumatoria es "+enteros1(p)+saludo(enteros(invertirOrden(p)))
    }else{
        return "Error: array corrupto"
    }
}

console.log(todo([1,2,3,4]))