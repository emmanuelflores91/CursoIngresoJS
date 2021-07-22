function mostrar()
{
	//tomo la edad  
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad > 17)
	{
		alert("Es mayor de edad ya que tiene "+edad+" años");
	}
	else
	{
	alert("Es menor");
	}
	

}//FIN DE LA FUNCIÓN