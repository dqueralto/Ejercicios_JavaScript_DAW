/** 
9.Crea una página web que haciendo uso de eventos permita arrastrar una imagen haciendo uso del ratón 
(al pulsar sobre la imagen la voy arrastrando hasta que sueltoel botón).

10.Mejora el ejercicio anterior para que se pueda hacer en una página con un númerocualquiera de imágenes.

 */

var x, y, osx, osy, img;
var clicCada = false;
window.onmousemove = function ()
{
    x = window.event.clientX;
    y = window.event.clientY;

    mover();
}

function hacesClic(event)
{
    clicCada=!clicCada;
    osx = x - event.target.hspace;
    osy = y - event.target.vspace;
    img = event.target;
}

function mover()
{
    if(clicCada)
    {
        img.hspace = x - osx;
        img.vspace = y - osy;
    }
}

