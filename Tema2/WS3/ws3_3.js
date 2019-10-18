/*
 Realizar un funci n que permita localizar todas las apariciones de una subcadena ó
dentro de otra. 

*/
var x = prompt("Inserta una frase:");
var y = prompt("Que letra desea buscar:");

document.write("Existen un total de "+buscarSubcadena(x,y)+" \""+y+"\" en el texto que que buscas");

function buscarSubcadena(e,a)
{
    let indices = [];
    let array = e.split('');
    let idx = array.indexOf(a);
    while(idx != -1 )
    {
        indices.push(idx);
        idx = array.indexOf(a, idx+1);
    }

    return indices.length;
}

