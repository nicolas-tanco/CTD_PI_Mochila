let vaso1="azul" //scope global, por eso funciona la funcion
let vaso2="rojo"

function intercambio(v1,v2){
    const aux=v1
v1=v2
v2=aux
console.log('vaso 1: '+v1)
console.log('vaso 2: '+v2) //las variables globales no cambian de valor
//otra manera return "vaso1:"+v1+"\nvaso 2: "+v2
}
intercambio(vaso1,vaso2)
//const mensaje=intercambiar(vaso1,vaso2)
//console.log(mensaje)
console.log('vaso 1: '+vaso1)
console.log('vaso 2: '+vaso2)
//vaso2=aux   //no puedo usar aux porque no es global
//que las variables ocupan un pedazo de memoria y se sobreescribe
//y salve el valor de vaso1 con aux
function pepe(x){
    return 2*x+5
}
console.log(pepe("a"))