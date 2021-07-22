function mostrar()
{
	let mensaje,
		estacion, 
		destino;

estacion = document.getElementById("txtIdEstacion").value;

destino = document.getElementById("txtIdDestino").value;


switch(estacion)
{
	case "Invierno":
		if (destino == "Bariloche")
		{
			mensaje = "Se viaja";	
		}			
		else
		{
			mensaje ="No se viaja";
		}
	break;

	case "Verano":
		if (destino == "Cataratas" || destino == "Mar del plata")
		{
			mensaje = "Se viaja";
		}			
		else
		{
			mensaje ="No se viaja";
		}
	break;

	case "Otoño":
			mensaje = "Se viaja";
	break;		

	case "Primavera":
		
		if (destino == "Bariloche")
		{
			mensaje ="No se viaja";	
		}
		else
		{
			mensaje = "Se viaja";
		}
	break;
		
}

console.log(mensaje);

}//FIN DE LA FUNCIÓN