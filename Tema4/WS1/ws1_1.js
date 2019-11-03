/** 
1 Captura el evento onClick del ratón para que cada vez que suceda se ejecute un alert

2 Captura el movimiento del ratón, para que se muestre la posición en la que seencuentra en cada momento.

4 Eventos onMouseMove y onLoad. Debemos ser capaces de dibujar con nuestro ratónen dos colores diferentes. 
Para ello primero simularemos que disponemos de uncanvas gráfico: 
realmente se tratará de una tabla con celdas de pequeño tamaño(100x100 puede valer). 
Tu programa creará ese canvas una vez cargada la página(onLoad). 
Lo siguiente será detectar el movimiento del ratón sobre las celdas parapintarlas de un color, 
el cual será rojo si se mantiene pulsada simultaneamente latecla Ctrl y azul si se pulsa Shift. 
En otro caso no deberá pintarse nada.

5 Añade las siguientes funcionalidades al ejercicio anterior:
    ◦Borrado de lineas con el ratón (mediante la pulsación del botón que túdecidas)
    ◦Borrar por completo el canvas (con un botón).

9 Crea una página web que haciendo uso de eventos permita arrastrar una imagenhaciendo uso del ratón 
    (al pulsar sobre la imagen la voy arrastrando hasta que sueltoel botón).

10.Mejora el ejercicio anterior para que se pueda hacer en una página con un númerocualquiera de imágenes
 */



    window.onload = function()
    {
        document.getElementById("bt").onclick = alerta;
    }






    function alerta()
    {
        alert("Hola: esto es una alerta");
    }





//;
