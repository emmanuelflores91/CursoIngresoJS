/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let suma = 0,
		multiplicacion = 1,
		flag = 0,
		respuesta,
		numeros;

		do 
		{
			numeros = parseInt(prompt("Ingrese un número:"));

			while (isNaN(numeros))
			{
				numeros = parseInt(prompt("Usted no ingresó un número.\nIntente nuevamente:"));
			}
				if (numeros < 0 )
				{
					multiplicacion *= numeros;
					flag = 1;
				}
				else
				{
					suma += numeros;
				}
				respuesta = prompt("¿Desea ingresar otro número?\nResponda S o N:").toLowerCase();			

		}
		while (respuesta == "s");

		if (!flag)
		{
			multiplicacion = 0;
		}

		document.getElementById("txtIdSuma").value = suma;
		document.getElementById("txtIdProducto").value = multiplicacion;
		

}//FIN DE LA FUNCIÓN