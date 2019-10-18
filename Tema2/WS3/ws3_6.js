/*
Implementa una funcion que tomando dos cadenas como entrada nos diga si la ó
segunda es una subcadena de la primera y cu l es la primera posici n a partir de á ó
la que esto ocurre.
*/

var x = pront("Inserte la primera cadena:");
var y = pront("Insertar la segunda cadena (a buscar):");

if (busquedaEnCadena() != -1)
{
    document.write("En \""+x+"\" existe la subcadena \""+y+"\".");
}
else
{
    document.write("En \""+x+"\" no existe la subcadena \""+y+"\".");
}

function busquedaEnCadena(e,o)
{
    let p = e.indexOf(o);

    return p;
}