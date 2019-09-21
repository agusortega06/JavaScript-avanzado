let divSin = document.querySelector("#sin_encademiento");
let divCon = document.querySelector("#con_encademiento");
let titulo= document.createElement('h2');
let tituloCon= document.createElement('h2');
titulo.innerHTML= "sin encademiento de promesas";
tituloCon.innerHTML= "con encademiento de promesas";
divSin.append(titulo);
divCon.append(tituloCon);

let promesa = new Promise(function(resolve, reject){
    setTimeout(()=> resolve(1), 1000);
});
promesa.then((resultado)=> {
    console.info(resultado);
    let p = document.createElement('p');
    p.innerHTML= `prim, then: ${resultado}`;
    divSin.append(p);
    return resultado *2;
});
promesa.then((resultado)=> {
    console.info(resultado);
    let p = document.createElement('p');
    p.innerHTML= `segundo then: ${resultado}`;
    divSin.append(p);
    return resultado *2; });
promesa.then((resultado)=> {
    console.info(resultado);
    let p = document.createElement('p');
    p.innerHTML= `tercer then: ${resultado}`;
    divSin.append(p);
    return resultado *2;
});



new Promise (function(resolve, reject){
    setTimeout(() =>resolve(1), 1000);
}).then((resultado) =>{
    let p = document.createElement('p');
    p.innerHTML= `primer then: ${resultado}`;
    divCon.append(p);
    return resultado *2;
}) .then((resultado) =>{
    let p = document.createElement('p');
    p.innerHTML= `segundo then: ${resultado}`;
    divCon.append(p);
    return resultado *2;
}).then((resultado) =>{
    let p = document.createElement('p');
    p.innerHTML= `tercer then: ${resultado}`;
    divCon.append(p);
    return resultado *2;
}).catch((resultado)=> {
    let p = document.createElement('p');
    p.innerHTML= `Me parece que salió mal ${error}`;
    divCon.append(p);
})

