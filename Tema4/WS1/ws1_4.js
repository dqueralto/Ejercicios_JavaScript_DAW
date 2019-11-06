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

    window.onload=()=>{
        gentabla(100,100);
    }
    
    //tras mucho investigar esta funcion crea una tabla con las filas y columnas que le indiques
    function gentabla(f,c) {
        // Obtener la referencia del elemento body
        var body = document.getElementsByTagName("body")[0];

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
                celda.setAttribute("onmouseover","colorear(event,this)")
                celda.appendChild(textoCelda);
                hilera.appendChild(celda);
            }
       
            // agrega la hilera al final de la tabla (al final del elemento tblbody)
            tblBody.appendChild(hilera);
        }
       
        // posiciona el <tbody> debajo del elemento <table>
        tabla.appendChild(tblBody);
        // appends <table> into <body>
        body.appendChild(tabla);
        // modifica el atributo "border" de la tabla y lo fija a "0";
        tabla.setAttribute("border", "0");
        tabla.setAttribute("cellspacing","0");
    }

    function colorear(evento, celda){
        
        if(evento.altKey==true){
            celda.setAttribute("bgcolor","red");
        }
        else if (evento.ctrlKey==true){
            celda.setAttribute("bgcolor","blue");
        }
        else if (evento.shiftKey==true){
            celda.setAttribute("bgcolor","white");
        }
        else{
            //celda.setAttribute("bgcolor","white");
        }
        
    }
//;
