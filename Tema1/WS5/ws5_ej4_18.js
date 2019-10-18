/** 
 * Hacer un programa que pida por teclado cuatro valores: el número de columnas y filas de una tabla y, 
 * la altura y anchura (en pixels) de sus celdas. Una vez tecleados estos valores, 
 * el programa pintará en la página web una tabla HTML del no de filas por el no de columnas tecleadas.
 */

var nCol = parseInt(prompt("Inserte el numero de columnas del tablero"));
var nFil = parseInt(prompt("Inserte el numero de filas de tablero"));
var altura = parseInt(prompt("Inserte el alto de las casillas de tablero"));
var anchura = parseInt(prompt("Inserte el ancho de las casillas de tablero"));

document.write("<table border= 1>");  
for(let o=1;o <= nFil; o++)
{
   document.write("<tr>");

   for(let i=1;i<= nCol;i++)
   {
      document.write("<td width=\""+anchura+"\" height=\""+altura+"\"></td>");
   }

   document.write("</tr>");
}

document.write("</table>");