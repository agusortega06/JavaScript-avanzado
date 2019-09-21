
$(document).ready(function(){
	completarSelect();



function completarSelect() {
/**
				<option value="1"> Soltero</option>
				<option value="2"> Casado</option>
				<option value="3">Otro</option>

*/
//document.querySelector(("#estado_civil");

}


$("#estado_civil").html(
				'<option value=\"1\"> Soltero</option>'+
				'<option value=\"2\""> Casado</option>'+
				'<option value=\"3\">Otro</option>'
	);
}

$('.btn').click(function(){
if(<alidarCampos){
	$('formJquery').submit();
}

});

function validarCampos(){

	let valido=true;
	if($("#txt_nombre").val()== ''){
		$("#txt_nombre").css('background-color', 'red');
		valido= false;
	}
	if($("#txt_edad").val()== ''){
		$("#txt_edad").css('background-color', 'green');
		valido= false;
	} else{ $("#txt_edad").css('background-color', 'green');

}
if($("#estado_civil").val() ===0){
		$("#txt_edad").css('background-color', 'green');
		
	} else{ $("#estado_civil").css('background-color', 'green');

	return valido;
}
