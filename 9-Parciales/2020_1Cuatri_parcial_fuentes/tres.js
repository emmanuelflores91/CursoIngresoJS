function mostrar()
{
	let 
		//variables grales
		nombre,
		edad,
		sexo,
		estadoCivil,
		temperatura,
		respuesta,

		//variables a
		altaTemp,
		pasajeroaltaTemp,
		pasajero1 = 1;

		//variables b
		cantMayoresViudos = 0;

		//variables c
		cantViudosOSolt = 0;

		//variables d
		cantAbuelosFiebre = 0;

		//variables e
		cantHombreSolteros = 0;
		sumaEdadSolteros = 0;
		promedioSolteros = 0;

		
		do 
		{
			nombre = prompt("Ingrese el nombre: ");
			edad = parseInt(prompt("Ingrese la edad: "));
			sexo = prompt("Ingrese el sexo: ");
			estadoCivil = prompt("Ingrese el estado civil: ");
			temperatura = parseFloat(prompt("Ingrese la temperatura: "));

			// a
			if (pasajero1 || temperatura > altaTemp)
			{
				altaTemp = temperatura;
				pasajeroaltaTemp = nombre;
				pasajero1 = 0;
			}
			//b
			
			if (edad >= 18 && estadoCivil == "v")
			{
				cantMayoresViudos ++;
			}	

			//c

			if (sexo == "m" && (estadoCivil == "s" || estadoCivil == "v"))
			{
				cantViudosOSolt ++;
			}

			//d
			if (edad > 60 && temperatura > 38)
			{
				cantAbuelosFiebre ++;
			}

			//e
			if ( sexo == "m" && estadoCivil == "s")
			{
				cantHombreSolteros ++;
				sumaEdadSolteros += edad;	
			}	

			
			
			respuesta = prompt("Quiere ingresar otro pasajero? s / n");
			
		} while (respuesta == "s");
		

		if (cantHombreSolteros > 0)		
		{
			promedioSolteros = sumaEdadSolteros / cantHombreSolteros;
		}

		console.log(pasajeroaltaTemp);
		console.log(cantMayoresViudos);
		console.log(cantViudosOSolt);
		console.log(cantAbuelosFiebre);
		console.log(promedioSolteros);



		
}		



