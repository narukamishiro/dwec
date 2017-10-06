var x = document.getElementById("demo");
function getlocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          function (position){
            coords =  {
              lng: position.coords.longitude,
              lat: position.coords.latitude
            };
            initMap(coords);  //pasamos las coordenadas al metodo para crear el mapa
            
           
          },function(error){console.log(error);});
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function initMap() {
		 
        var latlon = new google.maps.LatLng(coords.lat,coords.lng);
        var map = new google.maps.Map(document.getElementById('mapholder'), {
          zoom: 4,
          center: coords
        });
        var marker = new google.maps.Marker({
          position: latlon,
          map: mapholder
        });
      }
function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "usuario rechaza el permiso geolocalizar" 
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "la informacion de la posicion es inlegible"
            break;
        case error.TIMEOUT:
            x.innerHTML = "el permiso para geolocalizacion expiro"
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "error desconocido"
            break;
    }
}
getlocation();