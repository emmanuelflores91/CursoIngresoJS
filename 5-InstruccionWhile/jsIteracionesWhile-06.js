function mostrar()
{
	let numero,
		suma = 0,
		promedio,
		contador = 1;
	
		while (contador <=5)
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