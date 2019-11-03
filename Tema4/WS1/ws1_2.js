/** 

2 Captura el movimiento del ratón, para que se muestre la posición en la que seencuentra en cada momento.

 */

    var x;
    var y;

    window.onmousemove = function ()
    {
        x = window.event.clientX;
        y = window.event.clientY;
        coordenadas();
    }





    function coordenadas()
    {
        document.getElementById('p1').innerHTML = "X: "+x+"</br> Y: "+y;
    }





//;
