const xhrButtonSuccess= document.querySelector('.xhr.success');
const xhrButtonError= document.querySelector('.xhr.error');
const xhrButtonAbort= document.querySelector('.xhr.abort');
const log = document.querySelector('.events-log');

function handIeEvent(e){
    //log.innerHTML
    log.textContent = log.textContent + `${ e.type} :${e.loaded} bytes transferidos \n`;
}
function addListeners(xhr){

    xhr.addEventListener('loadstart', handIeEvent);
    xhr.addEventListener('load', handIeEvent);
    xhr.addEventListener('progress', handIeEvent);
    xhr.addEventListener('error', handIeEvent);
    xhr.addEventListener('abort', handIeEvent);

}
 function runXHR(url){
     log.textContent='';
     const xhr = new XMLHttpRequest();
     addListeners(xhr);
     xhr.open('GET', url);
     xhr.send();
     
     return xhr;
 }

 xhrButtonSuccess.addEventListener('click',() => {
     runXHR('descarga.jpg');
 });

 xhrButtonError.addEventListener('click', () =>{
     runXHR('no-existe.com')
 });

 xhrButtonAbort.addEventListener('click', ()=>{
     runXHR('descarga.jpg').abort();
 });