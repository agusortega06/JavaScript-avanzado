let promesa = new Promise(function(resolve, reject){
    setTimeout(() => resolve("Hola!!"), 3000);

});
let promesa = new Promise(function(resolve, reject){
    setTimeout(() => reject(new Error('Ups, salio9 mal')), 3000); }
)
promesa.then(
    function(resultado){console.info(resultado);},
    function(error){console}
    )
)