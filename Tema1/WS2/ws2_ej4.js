/*
 4. The Temperature Converter
It's hot out! Let's make a converter, and again you'll have to search the internet how to do it.

Store a celsius temperature into a variable.
Convert it to fahrenheit and output "NN°C is NN°F".
Now store a fahrenheit temperature into a variable.
Convert it to celsius and output "NN°F is NN°C."

4. El convertidor de temperatura
Está caliente! Vamos a hacer un convertidor, y de nuevo tendrás que buscar en Internet cómo hacerlo.

Almacenar una temperatura celsius en un variable.
Conviértalo a fahrenheit y la salida "NN-C es NN-F".
Ahora almacene una temperatura de fahrenheit en una variable.
Conviértalo al celsius y la salida "NN-F es NN-C."
*/



/*
let c = parseInt(pront("Temperatura (en ºC):"));
let f = c * 9 / 5 + 32;
document.writeln(c"-C son "+f+"-F");

let f1 = parseInt(pront("Temperatura (en ºF):"));
let c1 =  (f1-32) * 5 / ;
document.writeln(f1"-F son "+c1+"-C");
*/

let c = parseInt(prompt("Temperatura (en C)"));
let f = parseInt(prompt("Temperatura (en F)"));

//if(c.trim() == "" || f.trim() == "" || c == NaN || f == NaN){
    document.write(c+"-C son " + Math.round(cToF(c)*100)/100 + "-F<br/>");
    document.write(f+"-F son " + Math.round(fToC(f)*100)/100 + "-C");
/** 
}else{
    alert("Cuidado qon lo que insertas...")
}*/



function cToF(cel) 
{
    let f = cel * 9 / 5 + 32;
    return f;
}

function fToC(fah) 
{

    let f = (fah-32) * 5 / 9 ;
    return f;
}