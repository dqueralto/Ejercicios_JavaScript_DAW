/** 4.10 y 4.19
 Crea una web para resolver ecuaciones de segundo grado. Deber pedir por á
tanto los coeficientes y mostrar las soluciones posibles.
 */

var a = parseInt(prompt("Coeficiente 1: "));
var b = parseInt(prompt("Coeficiente 2: "));
var c = parseInt(prompt("Coeficiente 3: "));

 alert("Primera solucion: "+ ((-b) +(Math.sqrt((Math.pow(b,2) - (4*a*c)))))/(2*a) );
 alert("Segunda solucion: "+ ((-b) -(Math.sqrt((Math.pow(b,2) - (4*a*c)))))/(2*a) );