/** 
9.Crea una página web que haciendo uso de eventos permita arrastrar una imagenhaciendo uso del ratón 
(al pulsar sobre la imagen la voy arrastrando hasta que sueltoel botón).
 */

window.onload=()=>
{
    //var bt1 = document.getElementById('bt1');
    //bt1.addEventListener('onclick',alerta(),false);
    
    window.onmousemove = function ()
    {
        x = window.event.clientX;
        y = window.event.clientY;
        this.moverimg(x,y);
    }

}

function moverimg(x,y) 
{
    document.getElementById('tarta')[0].style.left=this.String(x);
    document.getElementById('tarta')[0].style.top=this.String(y);
}