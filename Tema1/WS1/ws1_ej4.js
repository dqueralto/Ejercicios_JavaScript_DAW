/*4) Haciendo uso de dos variables, 
opera ambas y muestra por pantalla el valor de ambas (“El valor de la primera variable es ...”), 
y el resultado de las principales operaciones matemáticas (“La suma es: .... “).*/


let x = parseInt(prompt("El valor de la primera variable es:"));
let y = parseInt(prompt("El valor de la segunda variable es:"));

let s = x + y;
let r = x - y;
let m = x * y;
let d = x / y;


document.write("La suma es: " + s);
document.write("<br>La resta es: " + r);
document.write("<br>La multiplicación es: " + m);
document.write("<br>La división es: " + d);
