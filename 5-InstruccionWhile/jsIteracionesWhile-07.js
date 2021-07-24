/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let numero,
		suma = 0,
		promedio,
		cantidadNumeros;
		contador=1;

		cantidadNumeros = parseInt(prompt("Ingrese la cantidad de números que desea ingresar:"))
	
		while (contador <= cantidadNumeros)
		{
			numero = parseInt(prompt("Ingrese el número " + contador));

				while (isNaN(numero))
				{	
					numero = parseInt(prompt("Usted no ingresó un número.\nIngrese el número " + contador));
				}
				
				contador ++;
			suma = suma + numero;
		}
		promedio = suma / (contador-1);			

		document.getElementById("txtIdSuma").value = suma;
		document.getElementById("txtIdPromedio").value = promedio;

}//FIN DE LA FUNCIÓN