//1

let cuenta={
    numero:123,
    saldo:0,
    titular: "martin cejas",
    deposito: function(cantidadDinero){

    }
}

//2
let cuenta7={
    numeroCuenta: 1234,
    saldo:0,
    titular:"martin",
    deposito:function(cantidadDinero){
        this.saldo+=cantidadDinero
        console.log("nuevo saldo es "+this.saldo);
    },
    extraccion: function(cantidadExtraccion){
       if(cantidadExtraccion>=this.saldo) {
           console.log("fondos insuficientes")
       } else {
         
        this.saldo-=cantidadExtraccion
        console.log("transaccion realizada y el saldo es "+ this.saldo); 
    }
}}

//3

function CuentaNueva(numeroCuenta, saldo, titular, deposito, extraccion){
    this.nroCuenta=numeroCuenta;
    this.saldo=saldo;
    this.titular=titular;
    this.deposito= function qq(){
        this.saldo+=deposito
        return "nuevo saldo es "+this.saldo;
    };
    this.extraccion=function rr(){
        if(extraccion>=this.saldo) {
            console.log("fondos insuficientes")
        } else {
          
         this.saldo-=extraccion
         console.log("transaccion realizada y el saldo es "+ this.saldo); 
     };

}}

//4  

let ss=  new CuentaNueva(1234,0,"martin",5000,4000)
console.log(ss)
console.log(cuenta7);

console.log(ss.deposito(),ss.extraccion())



////// Ejercicio 2

let alumnos={
    nombre: "marcos",
    legajo: 123,
    notas: [8,8,7,8,9,9,6,10],
    promedio: function(){
        let k=0
        for(i=0;i<this.notas.length;i++){
            const element= this.notas[i]
            k+=element 
            
        }
        return k / this.notas.length
    }

}

console.log(alumnos.promedio())