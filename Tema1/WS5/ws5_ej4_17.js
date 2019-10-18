/** 
 * Hacer un programa en JavaScript que usando
dos bucles anidados for imprima por pantalla
todas las tablas de multiplicar.
 */


 document.write('<h1>Tablas de multiplicar</h1>');
 for(let i=0;i<=10;i++)
 {
   document.write("<h3>Tabla del "+i+"</h3>");

    for(let o=0;o<=10;o++){
      document.write(i+" * "+o+" = "+(i*o)+"</br>");
    }
    //document.write("</br>");
 }