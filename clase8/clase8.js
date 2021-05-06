let usuario = {
    nombre:"martin",
    apellido:"cejas",
    edad:27,
    validado: true,
    amigos: ["eze", "lean"],
    darLike: function(r){
        console.log(this.nombre+"like"+this.amigos[r])
    }
}

console.log(usuario)
console.log(usuario.edad)
console.log(usuario["edad"])
console.log(usuario.darLike(0))  //ojo porque tira undefinde porque esta haciendo console.log(console.log(usuario.darLike()))
usuario.darLike(0)
console.log(usuario["nombre"])

function usuario(n,a,e,v,am){
    this.nombre=n;
    this.apellido=a;
    this.edad=e;
    this.validad=v;
    this.amigos=am;
    this.darLike=function(r){
        console.log(this.nombre+"like"+this.amigos[r])
    }
}

