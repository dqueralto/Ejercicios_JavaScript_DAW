/** 
1.Define   una   función   máximo   que   dados   4   valores   devuelva   el   máximo   de   ellos.
 Llámala con un ejemplo pidiendo los 4 valores al usuario
 */

x = parseInt(prompt("Inserte valor 1:"));
y = parseInt(prompt("Inserte valor 2:"));
z = parseInt(prompt("Inserte valor 3:"));
p = parseInt(prompt("Inserte valor 4:"));

var maximo = function(...a){ return Math.max(...a); } 

document.write( "El valor maximo es: "+maximo(x,y,z,p) );
 
