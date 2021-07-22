function mostrar()
{
	let mes;
	
	mes = document.getElementById("txtIdMes").value;
	
	switch(mes)
	{	
		case "Febrero":	 
			console.log("Este mes tiene 28 días");
			break;

		case "Enero": 
		case "Marzo":
		case "Mayo":		
		case "Julio":			
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			console.log("Este mes tiene 31 días");	
			break;
		
		case "Abril": 
		case "Junio" :	
		case "Septiembre":
		case "Noviembre":
			console.log("Este mes tiene 30 días");
			break;			
	}
	
} //FIN DE LA FUNCIÓN