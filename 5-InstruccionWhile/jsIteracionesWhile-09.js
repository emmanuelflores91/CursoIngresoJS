/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	let numero,
		maximo,
		minimo,
		contador = 0,
		respuesta;

		do
		{
			numero = parseInt(prompt("Ingrese un número:"));

			while(isNaN(numero))
			{
				numero = parseInt(prompt("Usted no ingresó un número.\nSólo puede ingresar valores numéricos.\nIntentelo nuevamente:"));
			}

			contador ++;

			if (contador == 1)
			{
				maximo = numero;
				minimo = numero;
			}
			else if (numero > maximo)
			{
				maximo = numero;

			}
			else if (numero < minimo)
			{
					minimo = numero;
			}

			respuesta = prompt("¿Desea ingresar otro número?\nResponda Sí o No:").toLowerCase();

			while(!(respuesta == "si" || respuesta == "no"))
			{
				respuesta = prompt("No se admite esa respuesta.\nSólo puede ingresar Sí o No.\nIntentelo nuevamente:").toLowerCase();
			}

		}
		while(respuesta == "si");

		document.getElementById("txtIdMaximo").value = maximo;
		document.getElementById("txtIdMinimo").value = minimo;


}//FIN DE LA FUNCIÓN