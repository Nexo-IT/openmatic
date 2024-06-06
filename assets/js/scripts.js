function obtenerUbicacion() {
    if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(mostrarPosicion, mostrarError);
    } else {
        alert("La geolocalización no es compatible con este navegador.");
        }
}

        function mostrarPosicion(position) {
            var latitud = position.coords.latitude;
            var longitud = position.coords.longitude;
            document.getElementById("ubicacion").innerHTML = "Latitud: " + latitud + "<br>Longitud: " + longitud;
        }

        function mostrarError(error) {
            switch(error.code) {
                case error.PERMISSION_DENIED:
                    alert("El usuario denegó la solicitud de geolocalización.");
                    break;
                case error.POSITION_UNAVAILABLE:
                    alert("La información de ubicación no está disponible.");
                    break;
                case error.TIMEOUT:
                    alert("La solicitud para obtener la ubicación ha caducado.");
                    break;
                case error.UNKNOWN_ERROR:
                    alert("Ocurrió un error desconocido.");
                    break;
            }
        }