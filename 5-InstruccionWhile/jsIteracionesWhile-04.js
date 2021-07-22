/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numero;

	numero = parseInt(prompt("Ingrese un número entre 0 y 9:"));

	while (numero <0 || numero >9 || isNaN (numero))
	{
		numero=parseInt(prompt("El número no está en el rango especificado.\nRecuerde que debe ser entre 0 y 9.\nReingrese el número:"));
	}
	document.getElementById("txtIdNumero").value = numero;
	
}//FIN DE LA FUNCIÓN