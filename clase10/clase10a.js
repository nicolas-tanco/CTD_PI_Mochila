function AlumnoConstructor(nombre,faltas,notas){
    this.nombre=nombre;
    this.faltas=faltas;
    this.notas=notas;
    this.promedio=function(){
        let r=0
        for(i=0;i<this.notas.length;i++) r+=this.notas[i]
        return r/this.notas.length
    };
    this.faltas1()=function(){
        this.faltas++
    }
}

module.exports= AlumnoConstructor