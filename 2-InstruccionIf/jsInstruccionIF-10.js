function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let nota = Math.floor(Math.random()*10+1);

	if (nota > 9)
	{
		alert("Excelente. Su nota es " + nota);

	}	
	else 
	{	
			if (nota < 9 && nota > 4) 
			{
			alert("Aprobó. Su nota es " + nota);
			}
			else
			{
			alert ("Vamos, la próxima se puede. Su nota es " + nota);	
			}

	}
	
}//FIN DE LA FUNCIÓN