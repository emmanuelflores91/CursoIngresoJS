/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let clave;

	prompt("Ingrese la clave:");

	while (clave != "utn750")
	{
		clave = prompt("La clave es incorrecta. Reingrese la clave:");
	}
	alert("La clave es correcta");
}//FIN DE LA FUNCIÓN
