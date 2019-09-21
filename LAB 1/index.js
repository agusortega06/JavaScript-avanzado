function cambiarTitutlo(){

	var titulos= 
	document.getElementsByTagName('h2');
	//console.log(titulos[0].innerHTML);
	for (let i = 0; i< titulos.length;i++){
		if(i==0){
			titulos[i].innerHTML=
			"Primer titulo cambiado";
		}
		if(i==1){
			titulos[i].innerHTML=
			"Segundo titulo cambiado";
		}
	}
	
}

let linea= document.createElement("hr");
document.getElementsByClassName ("container");

let container= document.querySelector
(".container");
/*let container= document.querySelector
("#linea");*/

let divlinea = document.querySelector
(#linea);
divlinea.appendChild(linea);

let txt1 = document.createElement
("input");
let txt2 = document.createElement
("input");
txt1.setAttribute("type","text");
txt2.setAttribute("type","text");

txt1.setAttribute("id","num1");
txt2.setAttribute("id","num2");

txt1.classList.add("form-control");
txt2.classList.add("form-control")

document.getElementById("input1");
appendChild(txt1);
document.getElementById("input2");
appendChild(txt2);