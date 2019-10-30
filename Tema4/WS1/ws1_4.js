/** 
4 Eventos onMouseMove y onLoad. Debemos ser capaces de dibujar con nuestro ratónen dos colores diferentes. 
Para ello primero simularemos que disponemos de uncanvas gráfico: 
realmente se tratará de una tabla con celdas de pequeño tamaño(100x100 puede valer). 
Tu programa creará ese canvas una vez cargada la página(onLoad). 
Lo siguiente será detectar el movimiento del ratón sobre las celdas parapintarlas de un color, 
el cual será rojo si se mantiene pulsada simultaneamente latecla Ctrl y azul si se pulsa Shift. 
En otro caso no deberá pintarse nada.

 */
/*
window.onload=()=>
{*/
    //var bt1 = document.getElementById('bt1');
    //bt1.addEventListener('onclick',alerta(),false);
    
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

    function tabla()
    {
        var ar = new Array();
        for (let i = 0; i < 100; i++) 
        {
            ar = "<tr>";
            for (let e = 0; e < 100; e++) 
            {
                ar = "<td></td>";

            }
            ar = "</tr>";
        }
        document.getElementById('tabla').innerHTML = ar.join("");

    }
//;
