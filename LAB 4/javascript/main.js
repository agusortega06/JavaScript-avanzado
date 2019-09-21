document.addEventListener('DOMContentLoaded', function(){
//console.log('Hola me cargué');

cargaTabla(1);
});

var objAjax;

function cargaTabla(editorial){
	objAjax = new XMLHttpRequest();

	objAjax.addEventListener('load', cargarCampos);
	objAjax.addEventListener('error', errorAjax);

	objAjax.open('GET','ajax/editorial'+editorial+'.json');
	objAjax.send();
}
function errorAjax(){
	console.error('El ajax no funcionó');
}
function cargarCampos(){
	if(objAjax.status !==200){
		errorAjax();
	}

	let resultado = JSON.parse(objAjax.responseText); //JSON PARSE Transformar un json en una cadena de texto.
	setearTabla(resultado);
	//console.info(resultado);
	//console.log(resultado);
}
function setearTabla(datos){
//primero capturamos tbody --> id
//Armamos el bucle para acceder a cada uno de los elementos que nos trajimos
//por cada elemento, debemos crear fila(tr) y en cada fila debemos mostrar cada uno de los campos(tr)
//ACLARACION: cada td que creamos se lo debemos agregar tr anteriormente creado. Y a su vfez cada tr generado se lo debemos agreagr tbody

let tbody = document.querySelector("#bodyLibros");
tbody.innerHTML = '';
datos.forEach(dato ==> {
	console.log(dato);
})
}