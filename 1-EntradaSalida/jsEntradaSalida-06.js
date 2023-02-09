/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()

	//txtIdNumeroUno
	//txtIdNumeroDos

{
let numUnoTexto;
let numDosTexto;

let numUnoNumero;
let numDosNumero;

let resultado;


numUnoTexto = parseInt(document.getElementById("txtIdNumeroUno").value);
numDosTexto = parseInt(document.getElementById("txtIdNumeroDos").value);

numUnoNumero = parseInt(numUnoTexto)
numDosNumero = parseInt(numDosTexto)

resultado =  numUnoNumero + numDosNumero;

alert("El total de la sume es: "+resultado); 
}

