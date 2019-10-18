/** 
Crear una función llamado paresImpares que cree un array de 100 números aleatorios del 1al 1000. 
Una vez creado, mostrar el contenido y después organizarlo de forma que estén juntos los elementos pares y los impares. 
Después, volver a mostrar el array
 */
var ar = [];

var randomnNum = function(min,max){ return Math.floor(Math.random()*((max+1)-min)+min); }
var paresImpares =  function(  ){ 

    for (let index = 0; index < 99; index++) {
        ar.push(randomnNum(1,1000));
        
    }

    


}