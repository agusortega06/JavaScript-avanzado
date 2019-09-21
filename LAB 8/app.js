let prototipo= {
    nombre: "No te importa",
presentarse: function(){
    return "Mi nombre es " + this.nombre + " y soy un/a " + this.profesion;
}

}

let administraivo = Object.create(prototipo);
administraivo.profesion = "Administrativo";

let profe= Object.create(prototipo);
profe.profesion= "Profesor";

let alumno= Object.create(prototipo);
alumno.profesion= "Alumno";
alumno.nombre="MATIAS";

console.log(administraivo);
console.log(profe);
console.log(alumno);

/*Data descriptor */
let obj = {}
    Object.defineProperty(obj,'propiedad',{
        value:"Soy un valor",
        writable:true,
        enumerable:false,
        configurable:true
    });
    console.log(obj);
    obj.propiedad= 123;
    console.log(obj);
console.log(obj.propiedad);     //getterporque yo tengo un valor
obj.propiedad="Otra propiedad"; //setter porque defino un valor

let valor= 48;
Object.defineProperty(obj, 'Otra propiedad', {
    get(){return valor;},
    set(nuevoValor){ valor= nuevoValor}
});
obj.otraPropiedad = 12;
console.log(obj.otraPropiedad);

let persona4= Object.create(prototipo, {
    'nombre': {
        value: "Romeo",
        writable:true,
        enumerable: true,
        configurable:true
    },
   'apellido': {
        value: "Perez",
        writable:true,
        enumerable: true,
        configurable:true
    }
});

console.log(persona4);

let objetoNuevo = {}
    Object.defineProperty(objetoNuevo, 'op', {
        get(){return 1;},
        configurable: false
    });

    /*Object.defineProperty(objetoNuevo, 'op', {
enumerable:true
    }); */

    /*Object.defineProperty(objetoNuevo, 'op', {
        set(){}
    }); */

//delete.objetoNuevo.op;

Object.defineProperty(objetoNuevo, 'op2', {
    value: 1,
    writable:true,
});

Object.defineProperty(objetoNuevo, 'op3', {
    value: 2,
    writable:false,
});
Object.defineProperty(objetoNuevo, 'op4', {
    value: 3,
});

for(let i in objetoNuevo){
    console.log(1);
}
console.log(object.keys(objetoNuevo));
console.log(object.propertyIsEnumerable('op2'));
console.log(object.propertyIsEnumerable('op3'));
console.log(object.propertyIsEnumerable('op4'));