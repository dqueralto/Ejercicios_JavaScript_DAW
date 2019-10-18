/** 
Develop a web app in which:
Test if geolocation is available.
If it's available, show the current position (latitude and longitude)
If it isn't available, show a message for each and everyone of the possible errors.
Improve your code so you show the position continuously (although the user could be in moving, so it could change)
Find the way to meassure the distance traveled.

Desarrolle una aplicación web en la que:
Pruebe si la geolocalización está disponible.
Si está disponible, muestre la posición actual (latitud y longitud)
Si no está disponible, muestre un mensaje para todos y cada uno de los posibles errors.
Mejore su código para que muestre la posición continuamente (aunque el usuario podría estar en movimiento, por lo que podría cambiar)
Encontrar la manera de asegurar la distancia recorrida.
 */

var latitud = null;
var longitud = null;

/*navigator.geolocation.getCurrentPosition(function(position)//funcion anonima (se puede llamar a funciones ya definidas)
{
    var latitud = null;
    var longitud = null;
    latitud = position.coords.latitude;
    longitud = position.coords.longitude;


})*/

if ("geolocation" in navigator) 
{
    /* la geolocalizacion esta disponible */
    navigator.geolocation.getCurrentPosition(function(position)//funcion anonima (se puede llamar a funciones ya definidas)
    {
        latitud = position.coords.latitude;
        longitud = position.coords.longitude;
        visuInfo(latitud,longitud);
    },error)

}
else
{
    /* la geolocalizacion no esta disponible */
    error();
}

function visuInfo(x,y) 
{
    document.write("<p>-------------------------------------------</p></br>");
    document.write("<p>Latitud: "+x+"</br>Longitud: "+y+"</p>");//visualizar coordenadas.
    document.write("<p>-------------------------------------------</p></br>");

}

function error(x) 
{
    if(x.code == PERMISSION_DENIED || x.code == 1)
    {
        document.write("Lo siento no se a podido ubicar su posicion.");
    }
    else if (x.code == POSITION_UNAVAILABLE || x.code == 2) 
    {
        document.write("Lo siento no se a podido ubicar su posicion.");
    }
    else if (x.code == PERMISSION_DENIED || x.code == 3) 
    {
        document.write("Lo siento pero se a excedido el tiempo de esperar para buscar .");
    }
}