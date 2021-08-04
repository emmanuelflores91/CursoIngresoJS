/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/
function mostrar()
{
	let 
		i,
		divisores = 0,
		fin;

	i = parseInt(prompt("Ingrese el número inicial: "));
	fin = parseInt(prompt("Ingrese el número final: "));

	for(i ; i <= fin ; i++)
	{
		for (let c = 1; c <= 10; c++)
		{
			if(i % c == 0)
			{
				divisores++;
			}
		}

		if (divisores < 3)
		{
			console.log (i);						
		}
		else
		{
			divisores = 0;
		}
		
		
	
	}


}

