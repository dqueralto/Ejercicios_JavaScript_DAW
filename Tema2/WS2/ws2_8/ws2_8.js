/** 4.10 y 4.19
Crea una web en la que cada vez que se accede se muestre una imagen
(de modo aleatorio) de entre 3 posibles.
 */

var imagen = [];
imagen.push("img1.png");
imagen.push("img2.png");
imagen.push("img3.png"); 

num = Math.round(numRanmdon(0,2));

document.write("<img src='./img/"+imagen[num]+"' />");

function numRanmdon( max, min)
{
   return Math.random()*(max-min)+min;
}