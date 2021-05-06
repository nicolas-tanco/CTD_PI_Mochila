let alumno={
    nombre: "",
    faltas: 0,
    notas: [],
    promedio: function(){
        let r=0
        for(i=0;i<this.notas.length;i++) r+=this.notas[i]
        return r/this.notas.length
    },
    faltas1: function() {
         this.faltas++
    },
}


let k= require("./clase10a")
module.exports= alumno

