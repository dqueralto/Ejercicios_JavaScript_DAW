/** 
9.Crea una página web que haciendo uso de eventos permita arrastrar una imagen haciendo uso del ratón 
(al pulsar sobre la imagen la voy arrastrando hasta que sueltoel botón).
 */


var estaPinchada = false;
var offsetX, offsetY, x, y, imagen;
var event = window.event;

window.onload=()=>
{
    document.getElementById("tarta").onclick = hacesClic;
    document.getElementById("tarta").click = mover;

}




function hacesClic(event){
    estaPinchada=!estaPinchada;
    offsetX = x - event.target.hspace;
    offsetY = y - event.target.vspace;
    imagen = event.target;
}

function mover(event){
    x = event.clientX;
    y = event.clientY;

    if(estaPinchada){
        imagen.vspace = y - offsetY;
        imagen.hspace = x - offsetX;
    }
}