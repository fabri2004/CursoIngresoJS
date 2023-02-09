/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/

	//declaro una variable global:  (NO SE USA)
	//(va arriba del function)
	//var nombre

function mostrar()
{
	//declaro variable
	let nombre;

	//la variable pasa a ser lo que el usuario ingresa en la caja de texto
	nombre = prompt("Ingrese su nombre");

	//para que quede un mensaje más agradable (concateno texto)
	//alert("Su nombre es: " + nombre);
	alert(nombre);

}

