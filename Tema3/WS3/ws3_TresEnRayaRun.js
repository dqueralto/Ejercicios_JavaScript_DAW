//----------IMPORTACIONES------------------------------
import {TresEnRaya}  from './ws3_TresEnRaya.js';

//----------VARIABLES------------------------------
var tresRayas = new TresEnRaya();


//----------COOKIEs------------------------------
function setCookieExp(cname, cvalue, exdays) 
{
    var d = new Date();
    //d.setTime(d.getTime() + (exdays*24*60*60*1000));//expiracion en dias
    d.setTime(d.getTime() + (exdays*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function setCookie(cname, cvalue) 
{
    var expires = "expires=";
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) 
{
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
        }
    }
    return "";
}

function removeCookie() 
{
    setCookie("playerName1","",-1);
    setCookie("playerName2","",-1);
}

function checkCookie()
{
    var ub = document.getElementById("cabecera");
    var username1 = getCookie("playerName1");
    if (username1 != "") 
    {

    } else {
        username1 = prompt("Porfavor inserte el nombre del primer jugador:", "");

        if (username1 != "" && username1 != null) {
            setCookieExp("playerName1", username1, 5);
            let h2pj1 = document.createElement("h2");
            let nompj1 = document.createTextNode("PJ X: "+username1);
            h2pj1.appendChild(nompj1);
            h2pj1.setAttribute("id","pj1");
            ub.appendChild(h2pj1);
        }
    }

    var username2 = getCookie("playerName2");
    if (username2 != "") 
    {

    } else {
        username2 = prompt("Porfavor inserte el nombre del segundo jugador:", "");
        if (username2 != "" && username2 != null) {
            setCookieExp("playerName2", username2, 5);
            let h2pj2 = document.createElement("h2");
            let nompj2 = document.createTextNode("PJ O: "+username2);
            h2pj2.appendChild(nompj2);
            h2pj2.setAttribute("id","pj2");
            ub.appendChild(h2pj2);

        }
    }
}





//----------JUEGO------------------------------

function dibujarFicha(fich,idCelda) 
{
    var celda = document.getElementById(idCelda);
    switch (fich) {
        case "X":
            celda.innerHTML = '<svg width="100" height="100" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>';
            break;
        case "O":
            celda.innerHTML = '<svg width="100" height="100" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z"/></svg>';
            break;
        default:
            alert("No puedes insertar tu ficha aquí");
            break;
    }
}
function ganador(increment=0) 
{
    var gana = tresRayas.comprobarVictori(increment);

    switch (gana) {
        case "X":
            blockTable();
            alert("Victoria para X");
            break;
        case "O":
            blockTable();
            alert("Victoria para O");
        break;
        case "emp":
            blockTable();
            alert("¡¡¡EMPATE!!!");    
        break;
        default:
            
            break;
    }
}
function blockTable() 
{
    for(let i = 0 ; i < 9; i++)
    {
        let td  = document.getElementsByTagName("td")[i];
        td.style.pointerEvents = "none";
    }
}
function gentabla(f,c,ub,wc,hc) {
    // Obtener la referencia del elemento body
    //var body = document.getElementsByTagName("body")[0];

    // Crea un elemento <table> y un elemento <tbody>
    var tabla   = document.createElement("table");
    var tblBody = document.createElement("tbody");
    // Crea las celdas
    for (var i = 0; i < f; i++) {
        // Crea las hileras de la tabla
        var hilera = document.createElement("tr");
   
        for (var j = 0; j < c; j++) {
            // Crea un elemento <td> y un nodo de texto, haz que el nodo de
            // texto sea el contenido de <td>, ubica el elemento <td> al final
            // de la hilera de la tabla
            var celda = document.createElement("td");
            //Indicamos el texto de la celda
            var textoCelda = document.createTextNode(" ");
            //tresRayas.obtenerVariables(celda,i,j);
            let id = i+""+j;
            celda.addEventListener("click", function () {
                tresRayas.obtenerPosicion(id);
                let ficha = tresRayas.jugada(id,celda);
                dibujarFicha(ficha,id);
                ganador(1);
                
            });//mirete esto

            celda.appendChild(textoCelda);
            celda.setAttribute("id", id);
            celda.setAttribute("width",wc);
            celda.setAttribute("height",hc);
            celda.setAttribute("align","center");

            hilera.appendChild(celda);

        }
        hilera.setAttribute("id", i);

        // agrega la hilera al final de la tabla (al final del elemento tblbody)
        tblBody.appendChild(hilera);
    }
   
    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    // appends <table> into <body>
    ub.appendChild(tabla);
    // modifica el atributo "border" de la tabla y lo fija a "0";
    tabla.setAttribute("border", "5 black");
    tabla.setAttribute("cellspacing","1");
    tabla.setAttribute("id","tablero");
    
    
}


//----------EVENTOS------------------------------

window.onload=()=>{
    removeCookie();
    var ub = document.getElementById("juego");
    //checkCookie();
    gentabla(3,3,ub,120,120);

}