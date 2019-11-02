/** 
 * 2. Diseña una página web que debe contener texto (mínimo 4 párrafos). 
 * Deberás añadir lasiguiente funcionalidad mediante JavaScript:
 * •Tamaño de fuente. Debe ser posible incrementar o decrementar la fuente usada, asícomo volver al tamaño por defecto.
 * •Alineación   del   texto:   Debe   ser   posible   cambiar   la   alineación   a   Justificada   o   aIzquierda.
 * Se valorará el correcto diseño mediante funciones independientes para implementarcada una de esas funcionalidades.

 */

window.onload=()=>
{
    difinicion();
    document.getElementById("just").onclick = juntificado;
    document.getElementById("alIz").onclick = alIzquierda;
    
}

function difinicion() 
{
    document.getElementsByClassName("botones").style.width="100%";
    document.getElementsByClassName("contenido").style.width="100%";
    document.getElementsByClassName("parrafos").style.width="100%";
    document.getElementsByClassName("parrafo").style.width="100%";
    document.getElementsByClassName("titulo").style.width="100%";

    /*
    document.getElementById("h1").style.width="100%";
    document.getElementById("p1").style.width="100%";
    document.getElementById("p2").style.width="100%";
    document.getElementById("p3").style.width="100%";
    document.getElementById("p4").style.width="100%";
    */
}

function juntificado() 
{
    document.getElementsByClassName("titulo").style.textAlign="justify";
    document.getElementsByClassName("parrafo").style.textAlign="justify";

    /*
    document.getElementById("h1").style.textAlign="justify";
    document.getElementById("p1").style.textAlign="justify";
    document.getElementById("p2").style.textAlign="justify";
    document.getElementById("p3").style.textAlign="justify";
    document.getElementById("p4").style.textAlign="justify";
    */
}

function alIzquierda() 
{
    document.getElementsByClassName("titulo").style.textAlign="left";
    document.getElementsByClassName("parrafo").style.textAlign="left";

    /*
    document.getElementById("h1").style.textAlign="left";
    document.getElementById("p1").style.textAlign="left";
    document.getElementById("p2").style.textAlign="left";
    document.getElementById("p3").style.textAlign="left";
    document.getElementById("p4").style.textAlign="left";
    */
}