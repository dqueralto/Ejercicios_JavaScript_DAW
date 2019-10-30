/** 

2 Captura el movimiento del ratón, para que se muestre la posición en la que seencuentra en cada momento.

 */
/*
window.onload=()=>
{*/

    var x;
    var y;
    window.onmousemove = function ()
    {
        x = window.event.clientX;
        y = window.event.clientY;
    }



    function coordenadas()
    {
        document.getElementById('dv1').innerHTML("<p>X: "+x+" Y: "+y+"</p>");
    }
    window.onload=()=>{
        tabla();
    }


//;
