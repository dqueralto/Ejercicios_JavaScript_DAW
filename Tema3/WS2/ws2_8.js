/** 
Haciendo uso de un array unidimensional, escribir un script para simular el lanzamiento de dos dados. 
El script debe simular el lanzamiento (aleatorio) de ambos dados. 
La suma  de los dos valores debe calcularse a continuación (la suma variará pues de 2 a 12, 
    dsssiendo éstos los valores menos frecuentes así como 7 el más frecuente). 
Haz una simulación con 36.000 lanzamientos y muestra el número de veces que aparece cada una de las combinaciones.
 */

var ar = [];
var dado1 = numRanmdon(1,6);
var dado2 = numRanmdon(1,6);
var suma = dado1 + dado2;






function numRanmdon( max, min)
{
   return Math.floor(Math.random()*((max+1)-min)+min);
}