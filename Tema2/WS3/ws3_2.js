/*
Definir una funci n que muestre informaci n sobre una cadena de texto que se ó ó
le pasa como argumento. A partir de la cadena que se le pasa, la funci n ó
determina si esa cadena est formada s lo por may sculas, s lo por min sculas o á ó ú ó ú
por una mezcla de ambas.

*/
var x = prompt("Inserte un texto:");
determinarMAyMin(x);

function determinarMAyMin(a)
{
    if(a.trim() === a.toUpperCase() )
    {
        alert("ESTA TODO EN MAYUSCULAS!!!!!");
    }
    if(a.trim() === a.toLowerCase() )
    {
        alert("esta todo en minusculas!!!!!");
    }
    else
    {
        alert("Esta compuesto por Mayusculas y Minusculas!!!!");
    }
}



