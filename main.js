window.addEventListener("load", cargarPagina);
var slider = document.getElementById('slider');

function cargarPagina(){
	var boton = document.getElementById('boton');
	boton.addEventListener("click", addOpciones);
}

function addOpciones(e){
	e.preventDefault();
	slider.classList.toggle('closed');
}