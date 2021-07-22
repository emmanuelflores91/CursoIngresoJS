function mostrar()
{
	//tomo el mes

	let mes;
	
	mes = document.getElementById("txtIdMes").value;
	
	switch(mes)
	{
		case "Enero": 	 
		case "Marzo": 
		case "Abril": 
		case "Mayo":
		case "Junio" :
		case "Julio":
		case "Agosto":
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			console.log("Este mes tiene 30 o más días");
			break;
		case "Febrero":
			console.log("Este mes no tiene más de 29 días");
			break;
	}



}//FIN DE LA FUNCIÓN