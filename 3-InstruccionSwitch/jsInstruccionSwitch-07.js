function mostrar()
{
let destino;

destino = document.getElementById("txtIdDestino").value;

switch(destino)
{
	case "Bariloche":
		console.log("Oeste");
		break;

	case "Cataratas":
		console.log("Norte");
		break;

	case "Mar del plata":
		console.log("Este");
		break;

	case "Ushuaia":
		console.log("Sur");
		break;

}



}//FIN DE LA FUNCIÓN