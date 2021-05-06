//Ej1

function ej1(arr){
   return arr.map(e=>e/arr.reduce((a,n)=>a+n))
}

console.log(ej1([2,1,3,1,3]));

//ej2

function ej2(num,arr){
    return arr.filter(e=>e.length>num)
}

console.log(ej2(3,["sol","casa","a","asdasdas"]));

//ej3

function ordenXnombre(arr){
    return arr.sort(function(a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
      
        return 0;
      })
}


function ordenXnota(arr){
    return arr.sort((a,b)=>-(a.notas-b.notas))
}

console.log(ordenXnombre([{name:"walter",notas:2},{name:"fabio",notas:10}]));
console.log(ordenXnota([{name:"andres",notas:2},{name:"fabio",notas:10},{name:"andres",notas:8},{name:"fabio",notas:5}]));

//Ej integrador

//ej1

let verduleria= [{nombre:"tomate",precio:100,cantidad:10}]

function ej1a (arr){
   return arr.map(e=>e.ganancia=e.precio*e.cantidad)
}

function gananciaTotal(arr) {
    return arr.reduce((a,b)=>a+b.ganancia)
}

//ej2

function buscar(arr,name){
   let a= arr.find(e=>e.nombre===name)
   ej1a(a)
   return a.ganancia
}

//ej3

function buscarValor(valor) {
    return verduleria.filter(e=>e.ganancia>valor)
}

//ej4

verduleria.sort((a,b)=>a.ganancia-b.ganancia)

//ej5

function nuevoValor(name,valor) {
   let a= buscar(arr,name)
   a.precio=valor    
}

//ej6

verduleria.map(e=>e.precio=e.precio*0.55)
