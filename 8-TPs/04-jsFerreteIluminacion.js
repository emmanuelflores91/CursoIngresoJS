/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	let cantFocos,
        marca,
        precioUni = 35, // El precio base de cada lámpara
        precioDesc, // El precio de cada lámpara con el descuento correspondiente
        precioTotal, // El precio total a pagar en base a la cantidad de lámparas        
        iBrutos, // Monto de ingresos brutos
        totalCiBrutos; // Monto total más el monto de ingresos brutos

    cantFocos = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;  
    
    if (cantFocos >=6)
    {
        precioDesc = precioUni * 0.5;         
    }
        else if (cantFocos >=3 && cantFocos <6)
        {
            switch (cantFocos)
            {
                case 5:
                    if (marca == "ArgentinaLuz")
                    {
                        precioDesc = precioUni * 0.6;
                    }
                    else 
                    {
                        precioDesc = precioUni * 0.7;
                    }
                break;

                case 4:
                    if (marca == "ArgentinaLuz" || marca == "FelipeLamparas")
                    {
                        precioDesc = precioUni * 0.75;
                    }
                    else 
                    {
                        precioDesc = precioUni * 0.8;
                    }
                break;

                case 3:
                    if (marca == "ArgentinaLuz")
                    {
                        precioDesc = precioUni * 0.85;
                    }
                        else if (marca == "FelipeLamparas")
                        {
                            precioDesc = precioUni * 0.9;
                        }
                    else
                    {
                        precioDesc = precioUni * 0.95;
                    }
                break;    
            }
        }
    else
    {
    precioDesc = precioUni;  
    }  
    precioTotal = (precioDesc * cantFocos);

    if (precioTotal > 120)
    {
        iBrutos = precioTotal * 0.1;
        totalCiBrutos = precioTotal + iBrutos;        
        alert("El precio total de las lámparas es: $" + precioTotal + "\nPor superar los $120 se abona $" + iBrutos + " adicionales correspondientes a IIBB \nPrecio final: $"+ totalCiBrutos);
    }
    else
    {
        alert("El precio total a pagar es de $"  + precioTotal);
    }
    
    document.getElementById("txtIdprecioDescuento").value = "$" + precioDesc;
    

}
