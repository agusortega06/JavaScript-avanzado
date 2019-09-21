let reg = /javascript/;
let existe = "Hola desde javascript".match(reg); // match me va a permitir la expresion regular
console.log(existe);
if("Hola desde javascript".match(reg)){

	console.info('Dentro de if');
} else{
	console.warn('Fuera del if');
}

let j1= "123aaa242bbA00A".match(/[A- zA- Z]$/);
console.info(j1);

let j2= "12345".match(/\d/);
console.log(j2);

let cadena = "Hola desde \"Hola Mundo\"";
console.log(cadena);

let j3= "a2a".match(/a\d+a/);
console.log(j3);