function mostrar()
{
	//tomo la edad  
	let edad, estado;
	edad = parseInt(document.getElementById("txtIdEdad").value);
	estado = document.getElementById("estadoCivil").value;

	if (edad < 18)
	{
		if (estado == "Soltero")
		{
			alert("Es muy pequeño para No ser soltero");

		}
	}

	


}//FIN DE LA FUNCIÓN