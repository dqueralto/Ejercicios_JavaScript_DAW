//**
//Modifica el ejercicio anterior para que las columnas impares tengan un fondo negro y las pares fondo blanco.*/

var nCol = parseInt(prompt("Inserte el numero de columnas del tablero"));
var altura = parseInt(prompt("Inserte el alto de las casillas de tablero"));
var anchura = parseInt(prompt("Inserte el ancho de las casillas de tablero"));

document.write("<table border= \"1\">");  // cellspacing= \"2\" bgcolor= \"black\" w idth= ”200”>");
document.write("<tr>");

for(i=1;i<= nCol;i++)
{
   if(i%2){
      document.write("<td bgcolor=\"black\" width=\""+anchura+"\" height=\""+altura+"\"></td>");
   }else
   {
      document.write("<td width=\""+anchura+"\" height=\""+altura+"\"></td>");
   }

}

document.write("</tr>");
document.write("</table>")