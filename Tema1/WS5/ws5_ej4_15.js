/**
 * Escribe un programa en JavaScript que consista en adivinar un número
previamente introducido por teclado (jugador 1).
El programa pedirá tantos números como intentos erróneos haga el jugador 2. Solamente terminará cuando el jugador 2 acierte.
El programa dará pistas al jugador 2 indicándole si su número es mayor o
menor que el número a adivinar.
 */

var num = parseInt(prompt("Inserte el numero secreto:"));
var numInsertado 
while(num != numInsertado)
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
}
