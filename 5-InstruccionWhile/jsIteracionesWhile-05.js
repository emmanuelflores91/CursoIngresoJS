/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
let sexo;

sexo = prompt("Ingrese su sexo (f / m):").toLowerCase();


while (!(sexo == "f" || sexo == "m"))
{
	sexo = prompt("Error. No es un sexo válido. Ingrese f o m:").toLowerCase();
}

document.getElementById("txtIdSexo").value = sexo;



/*	let inicialSexo,
		sexoCompleto;

		inicialSexo = prompt("ingrese su sexo:").toUpperCase();
		

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
	*/

}//FIN DE LA FUNCIÓN