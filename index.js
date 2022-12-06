//Crear una clase Alumno con los atributos: código, nombre, nota1, nota2, nota3 y nota 4; y las operaciones: promedio (), condicion () y obsequio (). Para calcular el promedio considere la siguiente fórmula:
//PROM = nota1(15%) + nota2(20%) + nota3(25%) + nota4(40%)
//Para la condición determine si es “Aprobado” o “Desaprobado” (se aprueba con nota mínima 12).
//Todo alumno que apruebe con nota mayor a 17 se le obsequiará una “Mochila”.



class alumno {
    constructor(codigo, nombre, nota1, nota2, nota3, nota4){
        this.codigo = codigo
        this.nombre = nombre
        this.nota1 = nota1
        this.nota2 = nota2
        this.nota3 = nota3
        this.nota4 = nota4
}

 promedio (){
    return this.nota1*0.15 + this.nota2*0.20 + this.nota3*0.25 + this.nota4*0.40
 }

 condicion (){
    if(this.promedio() >=12) {
        return "¡Felicidades, Ud. está aprobado!"
    }else{
        return "Ud. ha desaprobado"
    }
 }

 obsequio(){
    if(this.promedio() > 17) {
        return "¡Ganaste una mochila!"
    }else{
        return "Lamentablemente no gano nada"
    }
 }
}

let alumnoNuevo = new alumno (2, "Micaela", 16,18,18,18)

    alert(alumnoNuevo.promedio())
    alert(alumnoNuevo.condicion())
    alert(alumnoNuevo.obsequio())
    alert(`${alumnoNuevo.nombre} obtuvo ${alumnoNuevo.promedio()} de promedio. ${alumnoNuevo.condicion()} ${alumnoNuevo.obsequio()}`)