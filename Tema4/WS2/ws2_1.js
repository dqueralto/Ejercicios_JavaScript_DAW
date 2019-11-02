/** 
a) Modificando el estilo desde JavaScript (las hojas de estilo no estan creadas, 
    sinoque se establece mediante atributos del objeto style).
b) Creando dos hojas de estilo diferentes que se carguen dinámicamente según laopción pulsada.
 */

window.onload=()=>
{
    miniStyle();
    document.getElementById("normal").onclick = normalStyle;
    document.getElementById("minimalista").onclick = miniStyle;

}


function normalStyle() {
    
    document.body.style.fontFamily="sans-serif";
    document.body.style.margin="0vh";
    document.body.style.padding="0wh";
    document.body.style.backgroundColor="blue";

    document.getElementById('contenido').style.backgroundColor="#ffffbf";
    document.getElementById('contenido').style.marginLeft="10vh";
    document.getElementById('contenido').style.padding="3vh";
    document.getElementById('contenido').style.width="100wh";
    document.getElementById('contenido').style.height="100vh";

    document.getElementById('divButton').style.backgroundColor="#e1e9f4";
    document.getElementById('divButton').style.boxShadow="1px 1px blue";
    document.getElementById('divButton').style.marginLeft="2vh";
    document.getElementById('divButton').style.marginRight="5vh";

    document.getElementById('normal').style.color="blue";
    document.getElementById('normal').style.border="none";
    document.getElementById('normal').style.fontWeight="bold";
    document.getElementById('normal').style.fontSize="16px";
    document.getElementById('normal').style.backgroundColor="transparent";

    document.getElementById('minimalista').style.color="blue";
    document.getElementById('minimalista').style.border="none";
    document.getElementById('minimalista').style.fontWeight="bold";
    document.getElementById('minimalista').style.fontSize="16px";
    document.getElementById('minimalista').style.backgroundColor="transparent";

    document.getElementById('p3').style.visibility="visible";
    document.getElementById('p3').style.fontWeight="bold";


    document.getElementById('marco').style.border="1px solid";
    document.getElementById('marco').style.backgroundColor="yellow";
    document.getElementById('marco').style.height="2vh";
    document.getElementById('marco').style.width="151vh";

    document.getElementById('marco1').style.border="1px solid";
    document.getElementById('marco1').style.backgroundColor="yellow";
    document.getElementById('marco1').style.height="2vh";
    document.getElementById('marco1').style.width="151vh";

}

function miniStyle() {

    document.body.style.fontFamily="initial";
    document.body.style.margin="initial";
    document.body.style.padding="initial";
    document.body.style.backgroundColor="initial";

    document.getElementById('contenido').style.backgroundColor="initial";
    document.getElementById('contenido').style.marginLeft="initial";
    document.getElementById('contenido').style.padding="initial";
    document.getElementById('contenido').style.width="initial";
    document.getElementById('contenido').style.height="initial";

    document.getElementById('divButton').style.backgroundColor="initial";
    document.getElementById('divButton').style.boxShadow="initial";
    document.getElementById('divButton').style.marginLeft="initial";
    document.getElementById('divButton').style.marginRight="initial";

    document.getElementById('normal').style.color="blue";
    document.getElementById('normal').style.textDecoration="underline";
    document.getElementById('normal').style.border="none";
    document.getElementById('normal').style.fontWeight="initial";
    document.getElementById('normal').style.fontSize="initial";
    document.getElementById('normal').style.backgroundColor="transparent";

    document.getElementById('minimalista').style.color="blue";
    document.getElementById('minimalista').style.textDecoration="underline";
    document.getElementById('minimalista').style.border="none";
    document.getElementById('minimalista').style.fontWeight="initial";
    document.getElementById('minimalista').style.fontSize="initial";
    document.getElementById('minimalista').style.backgroundColor="transparent";

    document.getElementById('p3').style.visibility="hiden";
    document.getElementById('p3').style.fontWeight="initial";


    document.getElementById('marco').style.border="initial";
    document.getElementById('marco').style.backgroundColor="initial";
    document.getElementById('marco').style.height="initial";
    document.getElementById('marco').style.width="initial";

    document.getElementById('marco1').style.border="initial";
    document.getElementById('marco1').style.backgroundColor="initial";
    document.getElementById('marco1').style.height="initial";
    document.getElementById('marco1').style.width="initial";
}