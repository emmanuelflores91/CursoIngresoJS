function mostrar()
{
	let mensaje = "Hola UTN FRA",
		cantidad;

	cantidad = parseInt(prompt("¿Cuántas veces quiere mostrar el mensaje?"))
	while(isNaN(cantidad))
	{
		cantidad = parseInt(prompt("Sólo puede ingresar la cantidad en números.\nIntente nuevamente:"));
	}

	for(let i = 0; i < cantidad; i++)
	{
		console.log(mensaje);
	}

}//FIN DE LA FUNCIÓN   