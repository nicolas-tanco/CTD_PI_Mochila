let suma4= require("figlet")
console.log(suma4.textSync("giovaa"))

let sumar=(a,b)=> a+b

console.log(sumar(4,5));

let casa1={casa:"am",

donde:"caba"}

let{cas,dond}=casa1

console.log({cas,dond})

let cc=[1,2,3,4,5]

let [aa,bb]=cc
console.log([aa,bb]);
console.log(aa)
console.log(...cc);
console.log( Math.max(...cc))

let dada={ de:"qq",
 qe:"333"}

let rr={
    ...casa1,
    ...dada
}

console.log(rr);

let t="ahahahshshshs"
console.log(...t)
let suma1=require("./index")

console.log(suma1.suma(3,4))
