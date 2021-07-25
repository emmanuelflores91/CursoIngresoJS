/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/

let aleatorio,
    intentos = 0;

function comenzar()
{
  aleatorio = Math.floor(Math.random() * 100 + 1 );	
  //console.log(aleatorio);
  intentos = 0; 

  document.getElementById("txtIdIntentos").value = null 
  document.getElementById("txtIdNumero").value = null

  
}

function verificar()
{
	let numero;   
  
  numero = parseInt(document.getElementById("txtIdNumero").value);
      
      intentos ++;
      if(numero != aleatorio)
      {      
        if(numero < aleatorio)
        {
          console.log("Falta para el número secreto");          
        }
        else
        {
          console.log("Se pasó del número secreto");
        }

      }
      else
      {
        console.log("Usted es un ganador y solo en " + intentos + " intentos");
      }
      document.getElementById("txtIdIntentos").value = intentos;
  
	
}
