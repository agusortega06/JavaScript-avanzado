function cambiarTitulo(){
    var titulos = document.getElementsByTagName('h2');
    //console.log(titulos[0].innerHTML);
    for(let i = 0; i < titulos.length;i++){
        if(i == 0){
            titulos[i].innerHTML =  "Primer título cambiado";
        }
        if(i == 1){
            titulos[i].innerHTML =  "Segundo título cambiado";
        }        
    }
}

let linea = document.createElement('hr');

/*let container = document.getElementsByClassName('container');*/

let container = document.querySelector('.container');

let divLinea = document.querySelector("#linea");

divLinea.appendChild(linea);


// <input />
let txt1 = document.createElement('input');
let txt2 = document.createElement('input');

// <input type="text" />
txt1.setAttribute('type','text');
txt2.setAttribute('type','text');

// <input type="text" id="x" />
txt1.setAttribute('id',"num1");
txt2.setAttribute('id',"num2");

txt1.classList.add('form-control');
txt2.classList.add('form-control');


document.getElementById("input1").appendChild(txt1);
document.getElementById("input2").appendChild(txt2);








