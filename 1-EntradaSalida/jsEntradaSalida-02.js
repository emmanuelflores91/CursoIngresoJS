/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar() {
  // Declaro la variable "name" para almacenar un nombre
  let name;

  /*Le pido al usuario que ingrese su nombre, 
y el dato se almacena en la variable name */
  name = prompt("Ingrese su nombre");

  /* muestro en pantalla el valor de la variable name, es decir 
el nombr que ingresó el usuario */
  alert(name);
}
