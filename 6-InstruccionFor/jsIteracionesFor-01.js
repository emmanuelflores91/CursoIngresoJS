function mostrar()
{
let mensaje = ""

for(let i = 1; i <= 10; i++)
{
	mensaje += + i + "\n";	
}
alert(mensaje); 



/* let contador = 0,
	numero,
	suma = 0;

	for (contador = 0; suma < 1000; contador++)
	{
		numero = parseInt(prompt("Ingrese un número:"));
		suma+= numero;
	}




	/*do
	{
	numero = parseInt(prompt("Ingrese un número:"));
	suma += numero;
	contador++;

	}while(suma < 1000)

	alert("Usted ingresó " + contador + " números para llegar o superar 1000");*/
}