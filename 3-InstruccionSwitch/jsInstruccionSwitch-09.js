function mostrar()
{
	let precioB = 15000,
		precioF,
		tarifaVar,
		des10 = -0.1,
		des20 = -0.2,
		aum10 = 0.1,
		aum20 = 0.2,
		estacion, 
		destino;

estacion = document.getElementById("txtIdEstacion").value;

destino = document.getElementById("txtIdDestino").value;


switch(estacion)
{
	case "Invierno":
		if (destino == "Bariloche")
		{
			tarifaVar = precioB * aum20;	
		}
			else if (destino == "Cataratas" || destino == "Cordoba")
			{
				tarifaVar = precioB * des10;
			}
		else
		{
			tarifaVar = precioB * des20;
		}
	break;

	case "Verano":
		if (destino == "Bariloche")
		{
			tarifaVar = precioB * des20;	
		}
			else if (destino == "Cataratas" || destino == "Cordoba")
			{
				tarifaVar = precioB * aum10;
			}
		else
		{
			tarifaVar = precioB * aum20;
		}
	break;

	case "Otoño":
	case "Primavera":
		
		if (destino == "Cataratas" || destino == "Mar del plata" || destino == "Bariloche")
			{
				tarifaVar = precioB * aum10;	
			}
			else
			{
				tarifaVar = 0
			}
	break;
		
}
precioF = precioB + tarifaVar;
console.log("El precio final es $" + precioF);




}//FIN DE LA FUNCIÓN