/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar() {
  let produ1, produ2, produ3, result;

  produ1 = document.getElementById("txtIdPrecioUno").value;
  produ1 = parseInt(produ1);

  produ2 = document.getElementById("txtIdPrecioDos").value;
  produ2 = parseInt(produ2);

  produ3 = document.getElementById("txtIdPrecioTres").value;
  produ3 = parseInt(produ3);

  result = produ1 + produ2 + produ3;

  alert("La suma es " + result);
}
function Promedio() {
  let produ1, produ2, produ3, result;
  produ1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
  produ2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
  produ3 = parseFloat(document.getElementById("txtIdPrecioTres").value);

  result = (produ1 + produ2 + produ3)/3;

  alert("El promedio es " + result.toFixed(4));
}
function PrecioFinal() {}
