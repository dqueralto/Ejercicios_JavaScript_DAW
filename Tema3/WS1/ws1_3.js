/** 
Para demostrar que todos deben tener similar probabilidad, 
mejora la web anterior demodo que se pueda generar una simulación de 6000 tiradas, 
mostrando al final el nºde ocurrencias de cada uno de los valores.
 */

var lanzamiento = function(min,max){ return Math.floor(Math.random()*(max-min)+min); }
var uno = 0, dos = 0,tres = 0,cuatro = 0,cinco = 0,seis = 0;

for (let index = 0; index < 6000; index++) {
    let result = lanzamiento(1,7);
    
    if (result == 1) {
        uno++;
    }else if (result == 2) {
        dos++;
    } else if (result == 3){
        tres++;
    }else if (result == 4){
        cuatro++;
    }else if (result == 5){
        cinco++;
    }else if (result == 6){
        seis++;
    }
}

document.write("A salido 1 un total de: "+uno+" veces</br>");
document.write("A salido 2 un total de: "+dos+" veces</br>");
document.write("A salido 3 un total de: "+tres+" veces</br>");
document.write("A salido 4 un total de: "+cuatro+" veces</br>");
document.write("A salido 5 un total de: "+cinco+" veces</br>");
document.write("A salido 6 un total de: "+seis+" veces</br>");