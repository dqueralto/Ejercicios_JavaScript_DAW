/** 
Crea una web para calcular el volumen de una esfera.
Para ello diseña una funciónque dado el radio de ésta devuelva el volumen
 */


var r = parseInt(prompt("Inserte el radio:" ));

var volumen = function(radio){ return (4/3) * Math.PI * Math.pow(radio, 3); }

document.write("El volumen de una esfera de radio "+r+" es "+volumen(r));


