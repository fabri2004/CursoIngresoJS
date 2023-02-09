/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()

    //numDividendo = número q voy a dividir
    //numDivisor = en cuantas partes divido el número
	//resultado = resto de la división

{
    let numDividendo;
    let numDivisor;
	let mensaje;

    numDividendo=parseInt(document.getElementById("txtIdNumeroDividendo").value);
    numDivisor=parseInt(document.getElementById("txtIdNumeroDivisor").value);
    //Calculamos el resto:
    //dividendo%divisor
    
    mensaje= "El resto es: "+ numDividendo % numDivisor; 

	alert(mensaje);
}
