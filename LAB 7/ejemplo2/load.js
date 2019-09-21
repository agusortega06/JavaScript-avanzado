function loadScrip(src){
    return new Promise(function(resolve, reject){
    let script = document.createElement('script');
 script src
        script.onload = () => resolve(script);
        script.onerror = () => reject (new Error(`No se pudo cargar el scrpt ${src}`));

        document.body.append(script);
    })

    let promesa = loadScrip('https://code.jquery.com/jquery-3.4.1.min.js');
     promesa.then((script) => console.info(`El script ${script.src} fue cargado correctamente`)) ;


     loadScrip.catch((error) => {
        console.log(`Hubo un error en la carga de script:  ${error}`);
        
     });
    }