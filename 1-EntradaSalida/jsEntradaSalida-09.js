/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    let sueldoIngresado;
	let porcentajeAplicado;
	let porcentaje;
	let resultado;

	porcentaje = 10
    //tomo el dato ingresado por id y lo parseo con parsefloat
    sueldoIngresado = document.getElementById("txtIdSueldo").value;
	sueldoIngresado = parseFloat(sueldoIngresado);
	
	//calculo porcentaje
	porcentajeAplicado = sueldoIngresado * porcentaje / 100;

	resultado = sueldoIngresado + porcentajeAplicado;

    document.getElementById("txtIdResultado").value = resultado;
}
