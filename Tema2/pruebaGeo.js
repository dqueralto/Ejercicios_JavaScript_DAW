

var directionsService = new google.maps.DirectionsService;
var directionsDisplay = new google.maps.DirectionsRenderer;

navigator.geolocation.getCurrentPosition(function(position)//funcion anonima (se puede llamar a funciones ya definidas)
{
    var latitud = position.coords.latitude;
    var longitud = position.coords.longitude;
    console.log(position.coords.latitude, position.coords.longitude);
})

