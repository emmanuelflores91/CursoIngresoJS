"use strict";
function mostrar()
{
let //Variables generales
	precio,
	marca,
	fabricante,
	cantidad,
	//Variables para alcohol
	cantidadAlcoholBarato,
	primerAlcohol = 1,
	AlcoholBaratoPrecio,
	tipo;

	for (let i=0; i<3;i++)
	{
		tipo = prompt("Ingrese alguno de los siguientes tipos:\n- Alcohol\n- Barbijo\n- Jabon").toLowerCase();
		
			while (tipo != "alcohol" && tipo != "barbijo" && tipo != "jabon")
			{
			tipo = prompt("¡ERROR!\nSólo puede ingresar alguno de los siguientes tipos:\n- Alcohol\n- Barbijo\n- Jabón").toLowerCase();
			}
		
		precio = parseFloat(prompt("Ingrese el precio. El mismo debe estar entre $100 y $300"));

			while (precio < 100 || precio > 300 || isNaN(precio))
			{
			precio = parseFloat(prompt("¡ERROR!\nRecuerde que el precio debe estar entre $100 y $300.\nSólo puede ingresar números"));
			}
	
		cantidad = parseInt(prompt("Ingrese la cantidad.\nNo se puede superar las 1000 unidades."));

			while (cantidad > 1000 || cantidad <= 0 || isNaN(cantidad))
			{
				cantidad = parseInt(prompt("¡ERROR!.\nRecuerde que:\n- No se puede superar las 1000 unidades.\n- La cantidad no puede ser cero o negativo.\n"));
			}
	/*
	marca = prompt("Ingrese la marca.\nLa misma no puede tener menos de dos caracteres.");
		
		while (marca.length < 2)
		{
			marca = prompt("¡ERROR!\nLa marca no puede tener menos de dos caracteres.");
		}

	fabricante = prompt("Ingrese el fabricante.\nEl mismo no puede tener menos de dos caracteres.");
		
		while (fabricante.length < 2)
		{
			fabricante = prompt("¡ERROR!\nEl fabricante no puede tener menos de dos caracteres.");
		}*/
		switch(tipo)
		{
			case "alcohol":
				if (primerAlcohol)
				{
					alcoholBarato = precio;
					cantidadAlcoholBarato = cantidad;

					flag = 0;
				}
				if (precio < alcoholBarato)
				{
					alcoholBarato = precio;
					cantidadAlcoholBarato = cantidad;
				}
			break;
		}
	}

	console.log("barato" + alcoholBarato);
	console.log("cantidad alcohol barato " + cantidadAlcoholBarato);
	console.log("ultimo precio" + precio);

}


