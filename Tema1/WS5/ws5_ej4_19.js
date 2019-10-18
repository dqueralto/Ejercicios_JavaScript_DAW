/** 4.10 y 4.19
*Hacer un programa que pinte un tablero de ajedrez de 8x8 casillas usando dos for anidados.
*El programa pedirá solamente el ancho de la celda que será igual que el alto.
 */
/**
 * Hacer un programa que pinte un tablero de ajedrez de 8x8 casillas usando dos for anidados.
El programa pedirá solamente el ancho de la celda que será igual que el
alto.
 */
//usar bool
var diametro = parseInt(prompt("Inserte el ancho de las casillas de tablero"));
var v = true;
document.write("<table border= 1>");  
for(let o=1;o <= 8; o++)
{
   document.write("<tr>");

   for(let i=1;i<= 8;i++)
   {
      if(v){
         document.write("<td bgcolor=\"black\" width=\""+diametro+"\" height=\""+diametro+"\"></td>");
         if(v)
            v = false;
      }else
      {
         document.write("<td width=\""+diametro+"\" height=\""+diametro+"\"></td>");
         v =true
      }

   }
      if(v)
      {
        v = false;
      }else
      {
         v = true;
      }

   document.write("</tr>");
}

document.write("</table>");