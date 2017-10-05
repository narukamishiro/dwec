var x = document.getElementById("demo");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    var latlon = position.coords.latitude + "," + position.coords.longitude;
	var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: latlon;
        });
	var marker = new google.maps.Marker({
          position: latlon,
          map: map
        });
    var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="
    +latlon+"&zoom=14&size=400x300&sensor=false&key=AIzaSyCuaX3NNquvrGSr-5hsJ8v7vhbRBJqYexg";
    document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
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
getLocation();