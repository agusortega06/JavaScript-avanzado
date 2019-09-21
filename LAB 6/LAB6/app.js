let fileInput = document.querySelector('input[type="file"]');
let preview =document.querySelector("#preview");
fileInput.addEventListener('change', (event) =>{
	preview.onload= function(){
		let dimensions = this.naturalWidth + 'x' + this.naturalHeight;
		document.querySelector('.dimensiones').innetHTML = 'Dimensiones: ' + dimensions;
	}
	//console.log(event.target.file[0]);
	let url = URL.createObjectURL(event.target.files[0]);
	preview.setAttribute('src', url);
});

//target 