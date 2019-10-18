/** 4.10 y 4.19
1. Crea una pagina en la que se muestre: á
• Un n mero aleatorio entre 0 y 1. ú
• Igual pero entre 100 y 200.
• Pide dos valores al usuario y genera un n aleatorio entre esos dos ºvalores.
 */
alert("Numero aleatorio:\n"+Math.random());
alert("Numero aleatorio entre 100 y 200 es:\n"+Math.round(numRanmdon(100,200)));
var entre = parseInt(prompt("Entre: "));
var hasta = parseInt(prompt("Hasta: "));
alert("Numero aleatorio entre "+entre+" y "+hasta+" es: \n"+Math.round(numRanmdon(entre,hasta)));

function numRanmdon( max, min)
{
   return Math.random()*(max-min)+min;
}