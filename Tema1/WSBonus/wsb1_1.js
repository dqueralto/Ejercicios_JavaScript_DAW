/** 4.10 y 4.19
 * Escribir un programa que muestre la frase “Cabecera h” seguido del número. 
 * Las frases deben estar formateadas con las etiquetas adecuadas. 
 * El resultado debe ser el siguiente:
 */

 var text = "Cabecera H";
 document.write('<h1>Practica de bucle for</h1>')
 for(let i=1;i<=6;i++)
 {
    document.write("<h"+i+">"+text+i+"</h"+i+"></br>");
 }