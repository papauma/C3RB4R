function montarDivRecercaSugerida(poblacio){	
	if (poblacio != ""){
		$poblacio = $("#containerInputPoblacio");
		$containerRecercaSugerida = $("#containerRecercaSugerida");
		$recercaSugerida = $("#recercaSugerida");
		$recercaSugerida.html(poblacio);
		$poblacio.removeClass("tableCell").addClass("oculto");
		$containerRecercaSugerida.removeClass("oculto").addClass("tableCell");
				
	}		
}

function desmontarDivRecercaSugerida(){		
	$poblacio = $("#containerInputPoblacio");
	$containerRecercaSugerida = $("#containerRecercaSugerida");
	$inputLongitud = $("#longitud")[0];
	$inputLatitud = $("#latitud")[0];
	
	$poblacio.removeClass("oculto").addClass("tableCell");
	$containerRecercaSugerida.removeClass("tableCell").addClass("oculto");
	$inputLongitud.value = "";
	$inputLatitud.value = "";	
}








$(document).ready(function() {
	$recercaSugerida = $("#recercaSugerida");
	
	$recercaSugerida.click(function(){
		desmontarDivRecercaSugerida();	
	});
	
	creacioAtutocomplete();
	
});