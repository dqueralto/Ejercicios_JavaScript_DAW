/*
3. The Geometrizer
Calculate properties of a circle, searching the internet for definitions if not remember.

Store a radius into a variable.
Calculate the circumference based on the radius, and output "The circumference is NN".
Calculate the area based on the radius, and output "The area is NN".

3. El Geometrizer
Calcular propiedades de un círculo, buscando definiciones en Internet si no recuerda.

Almacenar un radio en una variable.
Calcular la circunferencia basada en el radio y la salida "La circunferencia es NN".
Calcular el área en función del radio y la salida "El área es NN".

*/
const pi = Math.PI;

let r = parseInt(prompt("El valor del radio es:"));

let d = radio * 2;
//let p = 2 * pi * r;

document.write("La diametro del circulo es: " + d);
calcCircunference(r);
calcArea(r,)
function calcCircunference(radio)
{
    let p = 2 * pi * radio;
    document.write("<br>El perimetro del circulo es: " + Math.round(p*100)/100);

}

function calcArea(radio)
{
    let d = radio * 2;
    let a = d * pi;
    document.write("<br>El area del circulo es: " + Math.round(a*100)/100);
    

}