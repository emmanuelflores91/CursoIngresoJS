function mostrar()
{
	let destino;

destino = document.getElementById("txtIdDestino").value;

switch(destino)
{
	case "Bariloche":
	case "Ushuaia":
		console.log("Hace frío");
		break;

	case "Cataratas":
	case "Mar del plata":
		console.log("Hace calor");
		break;

	
}
}//FIN DE LA FUNCIÓN