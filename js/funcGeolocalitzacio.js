var geocoder;
var map;
var idioma;
defaultBounds = new google.maps.LatLngBounds(
  	new google.maps.LatLng(-33.8902, 151.1759),
  	new google.maps.LatLng(-33.8474, 151.2631)
);

function obtenerCoordenadas(){	
	var coordenadas = new Object();
	/*Sols en Local
	coordenadas.longitud = "-3.70379";
	coordenadas.latitud = "40.416775";*/
	
	
	  /*Descomentar en altres entorns*/
	if (navigator.geolocation){
		navigator.geolocation.getCurrentPosition(function(objPosition){
			var lon = objPosition.coords.longitude;
			var lat = objPosition.coords.latitude;					
			coordenadas.longitud = lon;
			coordenadas.latitud = lat;
			obtenirPoblacioDeCoordenades(coordenadas.latitud, coordenadas.longitud);

		}, function(objPositionError){			
			coordenadas = null;
		}, {
			maximumAge: 0,
			timeout: 15000
		});
	}	
	return coordenadas;
}


function obtenirPoblacioDeCoordenades(latitud, longitud){	
	var infoLocalitzacio = "";
	geocoder = new google.maps.Geocoder();
	var latlng = new google.maps.LatLng(latitud, longitud);
	
	geocoder.geocode({'latLng': latlng}, function(results, status) {
	    if (status == google.maps.GeocoderStatus.OK) {	    	
	    	if (results[5]) {	    			    	
		        infoLocalitzacio = results[5].formatted_address;
		        montarDivRecercaSugerida(infoLocalitzacio);
		        $("#longitud")[0].value = longitud;
		        $("#latitud")[0].value = latitud;
		        		             
	    	} else {	    		
	        	alert('No results found');
	    	}
	    } else {	    	
	      	alert('Geocoder failed due to: ' + status);
	    }
  	});

	return infoLocalitzacio;
}



$(document).ready(function() {
	var coordenadas = obtenerCoordenadas();		
});


function creacioAtutocomplete() {
	var input = $("#poblacio")[0];
 	idioma = $('#pais')[0].value;
	
	var options = {
  		bounds: defaultBounds,
  		types: ['(cities)'],
  		componentRestrictions: {country: idioma}
	};

  	autocomplete = new google.maps.places.Autocomplete(input, options);
}