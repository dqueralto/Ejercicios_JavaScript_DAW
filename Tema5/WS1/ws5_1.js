/** 

Crea una página web con al menos tres párrafos de texto y dentro de ellos un númeroindeterminado de enlaces 
(al menos uno debe enlazar a google). 

Haciendo tan sólouso del DOM muestra los siguientes datos:
•Número de enlaces de la página 
•Dirección a la que enlaza el penúltimo enlace 
•Numero de enlaces que enlazan a google
•Número de enlaces del tercer párrafo
 */



function crearElementos() {
    var p1,p2,p3,tx1,tx2,tx3;
    var body = document.getElementsByTagName("body")[0];

    p1 = document.createElement('p');
    p2 = document.createElement('p');
    p3 = document.createElement('p');

    a1 = document.createElement('a');
    a2 = document.createElement('a');
    a3 = document.createElement('a');


    a2.href = '';
    a2.href = 'https://www.google.com/';
    a2.href = '';


    tx1 = document.createTextNode("Enlace nada 1");
    tx2 = document.createTextNode("Enlace Google");
    tx3 = document.createTextNode("Enlace nada 3");

    a1.appendChild(tx1);
    a2.appendChild(tx2);
    a3.appendChild(tx3);

    p1.appendChild(a1);
    p2.appendChild(a2);
    p3.appendChild(a3);

    body.appendChild(p1);
    body.appendChild(p2);
    body.appendChild(p3);

}


function mostrarInfo() {
    var body = document.getElementsByTagName("body")[0];
    var element = body.children;
    var numEnlaces;
    element.forEach(ele => {
        ele.children
    });
    console.log(element[0].children.length);
 
}




window.onload=()=>
{
    crearElementos();
    mostrarInfo();
}
