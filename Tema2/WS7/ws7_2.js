/** 
Let's try to use the geolocation information with the API of Google Maps.
Use a map to show your location
Draw a marker in your location
Find a way to know the address of your location (reverse geocoding).

Vamos a intentar usar la información de geolocalización con la API de Google Maps.
Utilice un mapa para mostrar su ubicación
Dibuje un marcador en su ubicación
Encuentre una manera de conocer la dirección de su ubicación (geocodificación inversa).
 */



var latitud;
var longitud;



function initMap() {
    if ("geolocation" in navigator) 
    {
        /* la geolocalizacion esta disponible */
        navigator.geolocation.getCurrentPosition(function(position)//funcion anonima (se puede llamar a funciones ya definidas)
        {
            latitud = position.coords.latitude;
            longitud = position.coords.longitude;

            var myLatLng = {lat: latitud, lng: longitud};

            var map = new google.maps.Map(document.getElementById('map'), {
              zoom: 17,
              center: myLatLng
              
            });
          
            var marker = new google.maps.Marker({
              position: myLatLng,
              map: map,
              title: 'MyMap'
              
            });

            /*
            map.addListener('center_changed', function() {
              // 3 seconds after the center of the map has changed, pan back to the
              // marker.
              window.setTimeout(function() {
                map.panTo(marker.getPosition());
              }, 3000);
            });*/
    
            marker.addListener('click', function(e) {
              echo(e.latLng.latitud);
              echo(e.latLng.longitud);
              placeMarkerAndPanTo(e.latLng, map);

              
              //map.setZoom(8);
              //map.setCenter(marker.getPosition());
              

            });

            function placeMarkerAndPanTo(latLng, map) {
              var marker2 = new google.maps.Marker({
                position: latLng,
                map: map
              });

              map.panTo(latLng);

              //echo(latLng.latitud);
              //echo(latLng.longitud);
            } 
    
            alert("Sus coordenadas son:\nLatitud: "+latitud+"\nLongitud:"+longitud);
        })

    }

}



