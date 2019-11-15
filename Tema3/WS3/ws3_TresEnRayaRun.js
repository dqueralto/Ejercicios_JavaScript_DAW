import {TresEnRaya}  from './ws3_TresEnRaya.js';

 
var tresRayas = new TresEnRaya();

window.onload=()=>{
    var ub = document.getElementById("juego");
    gentabla(3,3,ub,120,120);
    //blockTable();
}

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





