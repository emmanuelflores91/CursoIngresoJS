/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let inicialSexo,
		sexoCompleto;

	inicialSexo = prompt("Ingrese su sexo:\n(F para femenino y M para masculino.)");

	while (!(inicialSexo == "F" || inicialSexo == "M" || inicialSexo == "f" || inicialSexo == "m"))
	{
		inicialSexo = prompt("El sexo ingresado es incorrecto.\nRecuerde ingresar F para femenino y M para masculino.");
	}

	if (inicialSexo == "F" || inicialSexo == "f")
	{
		sexoCompleto = "Femenino";
	}
	else
	{
		sexoCompleto = "Masculino";
	}

	document.getElementById("txtIdSexo").value = sexoCompleto;

}//FIN DE LA FUNCIÓN