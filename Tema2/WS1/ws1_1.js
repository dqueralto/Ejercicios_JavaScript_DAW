/** 
1. Realiza una p gina que cree un objeto de tipo Date y muestre en la á
p gina la siguiente informaci n (cada una en una l nea): á ó í
• El a o actual ñ
• El mes actual
• El d a actual í
• La hora actual
• Los minutos actuales
• Los segundos actuales
 */
 const fecha = new Date();
 
 var dia = fecha.getDate();
 var mes = fecha.getMonth();
 var anio = fecha.getFullYear();
 var hora = fecha.getHours();
 var minuto = fecha.getMinutes();
 var segundo = fecha.getSeconds();

 document.write("A\u00f1o: "+anio+"</br>");
 document.write("Mes: "+mes+"</br>");
 document.write("Dia: "+dia+"</br>");
 document.write("Hora: "+hora+"</br>");
 document.write("Minutos: "+minuto+"</br>");
 document.write("Segundos: "+segundo+"</br>");
