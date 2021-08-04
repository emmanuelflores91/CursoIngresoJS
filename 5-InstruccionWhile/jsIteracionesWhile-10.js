/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
let 
     //Positivos
    sumaPositivos = 0,
    cantidadPositivos = 0,
    promedioPositivos = 0,

    //Negativos
    sumaNegativos = 0,
    cantidadNegativos = 0,
    promedioNegativos = 0,

    numeros,
    respuesta,
    contador = 0,  
    cantidadCeros = 0,
    cantidadPares = 0,
    difPositivosNegativos = 0;

    do
    {
        numeros = parseInt(prompt("Ingrese el " + (contador+1) + "° numero:"));
        
        while(isNaN(numeros))
        {
            numeros = parseInt(prompt("Ingresó un caracter inválido.\nIntente ingresar un número:"));
        }
        
        contador++;

        if(numeros > 0)
        {
            sumaPositivos += numeros;
            cantidadPositivos ++; 
            
        }
        else if(numeros < 0)
        {
            sumaNegativos += numeros;
            cantidadNegativos ++;
        }
        else
        {
            cantidadCeros++;
        }

        if(numeros %2 == 0 && numeros != 0)
        {
            cantidadPares++;
        }            
        
        respuesta = prompt("¿Desea ingresar otro número?\nResponda Sí o No:").toLowerCase();
        
        while(respuesta != "si" && respuesta != "no")
        {
            respuesta = prompt("Ingresó una respuesta inválida.\nIntente ingresar Sí o No:").toLowerCase();
        }
            
    }while (respuesta == "si");

        if (cantidadNegativos > 0)
        {
            promedioNegativos = sumaNegativos / cantidadNegativos;
        }
        if (cantidadPositivos > 0)
        {
            promedioPositivos = sumaPositivos / cantidadPositivos;
        }
        if (cantidadNegativos > cantidadPositivos)
        {
            difPositivosNegativos = cantidadNegativos - cantidadPositivos;
        }
        else
        {
            difPositivosNegativos = cantidadPositivos - cantidadNegativos;
        }

        alert("NÚMEROS POSITIVOS\n" + 
            "Cantidad ingresada: " + cantidadPositivos +
            "\nSuma total: " + sumaPositivos +  
            "\nPromedio: " + promedioPositivos + 
            "\n\nNÚMEROS NEGATIVOS" + 
            "\nCantidad ingresada: " + cantidadNegativos +
            "\nSuma total: " + sumaNegativos +  
            "\nPromedio: " + promedioNegativos +
            "\n\nLa diferencia entre los positivos y los negativos es: " + difPositivosNegativos +
            "\n\nCantidad de ceros: " + cantidadCeros +
            "\nCantidad de números pares: " + cantidadPares);             

}