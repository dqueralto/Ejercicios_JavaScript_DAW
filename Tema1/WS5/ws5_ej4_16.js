//Adaptar el ejercicio 4.15. al bucle DO..WHILE
var num = parseInt(prompt("Inserte el numero secreto:"));
var numInsertado 
do
{
   numInsertado = parseInt(prompt("Inserte un numero:"));
   if(numInsertado > num)
   {
      alert("El numero es menor que "+numInsertado);
   }
   else if (numInsertado < num)
   {
      alert("El numero es mayor que "+numInsertado);
   }
   else
   {
      alert("Correcto, el numero era: "+num);
   }
}while(num != numInsertado)
