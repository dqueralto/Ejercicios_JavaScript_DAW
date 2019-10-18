/** 
2. Crea una p gina web en la que se muestre el resultado de cada uno de á
los siguientes apartados:
a. Crear variable "fechaHoy" con fecha de hoy
b. Crear variable "fecha85" que sume 85 d as a la variable "fechaHoy" í
c. Crear variable "fecha187" que reste 187 d as variable "fechaHoy" í
d. Sumar 2 a os a la variable "fecha85" ñ
e. Restar 24 horas a la variable "fecha187"
f. Crear variable "fechaResto" que sea la resta de fecha85 - fecha187 y
observa lo que obtienes
 */
const fechaHoy = new Date();
var dia = fechaHoy.getDate();
var mes = fechaHoy.getMonth();
var anio = fechaHoy.getFullYear();
var hora = fechaHoy.getHours();
var minuto = fechaHoy.getMinutes();
var segundo = fechaHoy.getSeconds();




document.write(fechaHoy+"</br>");
var fecha85 = sumarYrestarDias(fechaHoy,85);
document.write(fecha85+"</br>");
var fecha185 = sumarYrestarDias(fechaHoy,-185);
document.write(fecha185+"</br>");
document.write(sumarYrestarAnio(fecha85,2)+"</br>");

//document.write(fechaHoy.getFullYear()+2);

function sumarYrestarDias(f, d){
   f.setDate(f.getDate() + d);
   return f;
}

function sumarYrestarAnio(f, y){
   f.setDate(f.getFullYear()+y);
   return f;
}