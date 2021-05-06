let curso={
    nombre: "PI",
    aprobacion: 7,
    faltasMaximas:2,
    estudiantes:[],
    agregar: function(alumno){
        this.estudiantes.push(...alumno)
    },
    aprobo: function(alumno){
        if(alumno.promedio>=this.aprobacion && alumno.faltas<this.faltasMaximas){
            return true} else if (alumno.faltas==this.faltasMaximas && alumno.promedio>=this.aprobacion*1.1){
                return true
            } else{
                return false
            }
        },
    aprobados: function() {
        let arr=[]
        for(i=0;i<this.estudiantes;i++){
            arr.push(this.aprobo(this.estudiantes[i]))
        }
        return arr
    }
}

let estudiantes1=require("./clase10")

curso.agregar([{"martin";1,}])



