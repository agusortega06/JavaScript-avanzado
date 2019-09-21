/*Patrones de diseño */
/*Declaración/Sintaxis: let testModeulo = (function(){ })();*/

let testModulo = (function(){
// Parte privada


// Parte publica: todo lo que dentro del return va a ser parte publica del objeto


return{
    incrementarContador: function(){
        return contador++;
    },
    resetearContador: function(){
        console.log()(`Vamos a reseatear el contador que tenia ${contador}
        acumulado`);
        contador= 0;
    }

}
})(); 
//console.log(testModulo.contador);
testModulo.incrementarContador();
testModulo.incrementarContador();

testModulo.incrementarContador();


let personaModulo= (function(){

let nombre, apellido, edad;

return{
    setNombre: function(nombre){
        this.nombre= nombre;
    },
    getNombre: function(){
        return this.nombre;
    },
    setApellido: function(apellido){
        this.apellido= apellido;
    },
    getApellido: function(){
       return this.apellido;
    }
}

})();

let p = personaModulo;
console.log(p);
p.setNombre('Maria');
p.setApellido('Ortega');

console.log('El nombre de la persona es ' + p.getNombre() + " " + p.getApellido()
);

let carritoModulo= (function(){
let carrito= [];
const IVA = 1.21;
function calcularIVA(precio){
    return precio * IVA;
}
return{
    addItem: function(item){
        carrito.push(item);
    },
    getItemsTotales: function(){
        return carrito.length;
    },
    getTotal: function(){
        let q= this.getItemsTotales();
        let p = 0;
        while(q--){
            p += calcularIVA(carrito[q].precio);
        }
        return p;
    }
}
})();

let carritoVar= carritoModulo;
carritoVar.addItem({
    item: 'Pan',
    precio: 100,
});

carritoVar.addItem({
    item:'leche',
    precio: 50
});
carritoVar.addItem({
    item:'manteca',
    precio: 50
});
carritoVar.addItem({
    item:'Cerveza',
    precio: 110
});

//console.log();

console.log('-------------Carrito-----------');
console.log(carritoVar.getItemsTotales());
console.log(carritoVar.getTotal());