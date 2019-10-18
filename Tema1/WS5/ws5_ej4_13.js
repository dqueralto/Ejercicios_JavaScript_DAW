//Adapta el ejercicio 4.11 utilizando un bucle while en vez de un bucle for.

var nCol = parseInt(prompt("Inserte el numero de columnas del tablero"));
var altura = parseInt(prompt("Inserte el alto de las casillas de tablero"));
var anchura = parseInt(prompt("Inserte el ancho de las casillas de tablero"));
var i = 1;
document.write("<table border= \"1\">");  // cellspacing= \"2\" bgcolor= \"black\" w idth= ”200”>");
document.write("<tr>");
while(i != nCol)
{
      document.write("<td width=\""+anchura+"\" height=\""+altura+"\"></td>");
      i++;
}

document.write("</tr>");
document.write("</table>");
