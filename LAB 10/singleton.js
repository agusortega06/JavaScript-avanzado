let miSingleton= (function(){
let instancia;
function init(){
    function metodoPrivado(){
        console.log('Soy un metodo privado');
    }
let variablePrivada= 'Soy una variable privada';

let numeroAleatorio= Math.random();

return{
    metodoPublic: function(){ // es privado
        console.log('Soy un metodo publico');
    },
    propieadPublica: 'Yo soy una variable publica',

    getnumeroAleatorio: function () {
        return numeroAleatorio;
        
    }
}
};
return {
    getInstancia: function(){
        if(!instancia){
            instancia= init();
        }
        return instancia;
    }
}
})();

let singleA= miSingleton.getInstancia();
let singleB= miSingleton.getInstancia();

console.log(singleA.setInstancia());
console.log(singleB.setInstancia());

