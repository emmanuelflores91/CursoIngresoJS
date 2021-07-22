function mostrar()
{
	let hora;
	
	hora = parseInt(document.getElementById("txtIdHora").value);


	if (hora >=7 && hora <= 11)
	{
		console.log("Es de mañana");
	}
		else if (hora >= 12 && hora <= 19)
		{
			console.log("Es de tarde");
		}
			else if ((hora >= 20 && hora <= 24) || (hora >=0 && hora <= 6))
			{
				console.log("Es de noche");
			}
	else
	{
		console.log("La hora no existe");
	}		











	/*switch (hora)
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			console.log("Es de mañana");
			break;

		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
			console.log("Es de tarde");
			break;

		case 20:
		case 21:
		case 22:
		case 23:
		case 24:
		case 0:	
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
			console.log("Es de noche");
			break;

		default:
			console.log("La hora no esxiste");

	}
*/


} //FIN DE LA FUNCIÓN