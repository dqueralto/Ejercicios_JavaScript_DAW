/*
1. Crea las siguientes funciones y ll malas desde una p gina XHTML para mostrar á á
su funcionamiento:
a) invierteCadena(cad_arg): devuelve invertida una cadena dada por el usuario
b) inviertePalabras(cad_arg): devuelve invertidas las palabras contenidas en la
cadena.
c) encuentraPalabraMasLarga(cad_arg): para una cadena de caracteres dada
devuelve la longitud de la palabra m s larga en ella contenida á
d) fltraPalabrasMasLargas(cad_arg, i): para una cadena de caracteres y un
valor num rico (i), devuelva el n mero de palabras cuya longitud es mayor a i. é ú
e) cadenaBienFormada(cad_arg): formatea correctamente la cadena pasada,
de tal modo que s lo aparece en may scula la primera letra y el resto en ó ú
min scula. 

*/

var x = prompt("inserte el texto a invertir por caracteres:");
document.write(invertirCadenaCaracteres(x)+"</br>");
var y = prompt("inserte el texto a invertir por palabras:");
document.write(invertirCadenaPalabras(y)+"</br>");
var z = prompt("inserte el texto para buscar la palabra mas larga:");
document.write(palabrasMasLarga(z)+"</br>");
var q = prompt("inserte el texto para corregir mayusculas:");
document.write(corregirMayusculas(q)+"</br>");

function corregirMayusculas(a)
{
    let text = a.toLowerCase();
    return text.charAt(0).toUpperCase()+text.slice(1);

}

function palabrasMasLarga(a)
{

    let palabras = a.split(" ");
    let nr = palabras.length-1;
    let palabraLarga = "";
    let n;


    while (nr>=0) 
    {
        n = palabras[nr].length;
        if(n > palabraLarga.length)
        {
            palabraLarga = palabras[nr];
        }
        nr--;
    }
    return palabraLarga;
}

function invertirCadenaPalabras(a)
{

    let palabras = a.split(" ");
    let n = palabras.length-1;
    let palabrasInv = "";
    
    while (n>=0) 
    {
        palabrasInv = palabrasInv+" "+palabras[n];
        n--;
    }
    return palabrasInv;
}

function invertirCadenaCaracteres(a)
{
    let n = a.length;
    let textInv = '';
    while (n>=0) 
    {
        textInv = textInv+a.charAt(n);
        n--;
    }
    return textInv;
}


