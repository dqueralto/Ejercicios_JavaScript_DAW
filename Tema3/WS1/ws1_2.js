/** 
Crea una web desde la que se simule el lanzamiento de un dado de 6 caras.
Para ello define una función “lanzamiento” que devuelva un nº aleatorio entre 1 y 6

 */


var lanzamiento = function(min,max){ return Math.round(Math.random()*(max-min)+min); }

document.write("A salido un "+lanzamiento(1,6));