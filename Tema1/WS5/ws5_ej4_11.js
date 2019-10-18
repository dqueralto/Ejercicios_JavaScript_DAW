/**
 * Hacer un programa que pida por teclado tres valores: el número de columnas de una tabla y, 
 * la altura y anchura (en pixels) de sus celdas. Una vez tecleados estos valores, 
 * el programa pintará en la página web una tabla HTML de una fila por el no de columnas tecleadas.
 */

var nCol = parseInt(prompt("Inserte el numero de columnas del tablero"));
var altura = parseInt(prompt("Inserte el alto de las casillas de tablero"));
var anchura = parseInt(prompt("Inserte el ancho de las casillas de tablero"));

document.write("<table border= \"1\">");  // cellspacing= \"2\" bgcolor= \"black\" w idth= ”200”>");
document.write("<tr>");

for(i=1;i<= nCol;i++)
{
   document.write("<td width=\""+anchura+"\" height=\""+altura+"\"></td>");
}

document.write("</tr>");
document.write("</table>");
