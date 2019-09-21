function imp(x){
    console.log(x);
}

let persona = {
    nombre: "Jose",
    apellido: "Perez",
    edad: 30,
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    }
}

console.log(persona.nombreCompleto());
console.log(persona.edad);
console.log(persona["edad"]);
persona.peso = 90;
console.log(persona.peso);
persona["edad"] = 45;
console.log(persona["edad"]);

let nombreProperty = "nombre";
console.log(persona[nombreProperty]);
console.log(persona.nombreProperty);
persona.nombre = null;
imp(persona);

delete persona.nombre;
imp(persona);

let objEmpty = {};
imp(objEmpty);
let otroEmpty = new Object();
imp("Otro objeto vacío");
imp("-----------------------")
imp(otroEmpty);

imp("----- Constructores ------");
function OtraPersona(nombre,apellido){
    this.nombre = nombre;
    this.apellido = apellido;
    this.nombreCompleto = function(){
        imp(this.nombre  + " " + this.apellido);
    }
}
//OtraPersona.nombreCompleto();
let p = new OtraPersona('Maria','Rodriguez');
p.nombreCompleto();
imp(p);
imp(typeof p);
imp(typeof OtraPersona);
let test= OtraPersona('Romeo', 'Loquesa');
imp(test);


imp("++++++ Object.create ++++++++++");
let persona2= Object.create(null);
imp(persona2);
imp(typeof persona2);

/* 
 Object.create(prototype_object, properties);
 + prototype_object => Deber ser un objeto null +
 properties =>  propiedades para el nuevo objeto. 
 ESTE ARGUMENTO ES OPCIONAL.
*/

/* El operador typeof se usa en cualquiera de los siguientes modos:
typeof operando
typeof (operando)
El operador typeof devuelve una cadena que indica el tipo del operando sin evaluarlo.
 operando es la cadena, variable, palabra clave 
u objeto para el que se devolverá su tipo. Los paréntesis son opcionales. */

persona2.nombre= "Pepe";
//imp(persona2.nombre);
imp(persona2); 

/*Prototipo: se usa para el modelo de algo */

protitpo ={
nombreCompleto: function(){
    return this.nombre + " " + this.apellido;

}
}
imp(protitpo.nombreCompleto());

let persona3 = Objectcreate(protitpo);
persona3.nombre="PEDRO";
persona3.apellido= "GONZALEZ";

imp("Nombre completo de la persona3");
imp(persona3.funcionNombre());