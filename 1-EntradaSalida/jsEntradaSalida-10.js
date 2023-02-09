/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    let importe;
	let porcentajeAplicado;
	let porcentaje;
	let resultado;

	porcentaje = -25

    importe = document.getElementById("txtIdImporte").value;
	importe = parseFloat(importe);
	
	porcentajeAplicado = importe * porcentaje / 100;

	resultado = importe + porcentajeAplicado;

    document.getElementById("txtIdResultado").value = resultado;
}