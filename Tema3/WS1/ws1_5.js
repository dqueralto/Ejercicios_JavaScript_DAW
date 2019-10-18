/** 

Mejora el ejercicio anterior permitiendo calcular también el área de un circulo.
 */

var r = parseInt(prompt("Inserte el radio:" ));

var volumen = function(radio){ return (4/3) * Math.PI * Math.pow(radio, 3); }
var area = function(radio){ return Math.round( ((radio * 2) * Math.PI) * 100) / 100; }

document.write("El volumen de una esfera de radio "+r+" es "+volumen(r));
document.write("</br>El area de una esfera de radio "+r+" es "+area(r));




