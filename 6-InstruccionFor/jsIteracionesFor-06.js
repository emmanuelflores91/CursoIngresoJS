function mostrar()
{
	let numero,
		cantidadPares = 0,
		pares = 2;

		numero = parseInt(prompt("Ingrese un número:"));
		
		while(isNaN(numero))
		{
			numero = parseInt(prompt("Eso no es un número.\nIntente nuevamente:"));
		}
		
		for(let i=0;i <= numero;i++)
		{
			if(i % 2 == 0 && i != 0)
			{
				pares += " "+ i + " ";
				cantidadPares ++;
			}
		}

		alert("Números pares: " + pares + "\n\nCantidad de pares: " + cantidadPares);

}//FIN DE LA FUNCIÓN