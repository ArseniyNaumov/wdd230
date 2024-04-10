function initMap() {
    var mapContainer = document.getElementById('map');
    var map = new google.maps.Map(mapContainer, {
        center: { lat: 20.4225, lng: -86.9223 },
        zoom: 9 // Zoom level
    });
    var marker1 = new google.maps.Marker({
        position: { lat: 20.5014, lng: -86.9538 },
        map: map,
        icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
    });

    var marker2 = new google.maps.Marker({
        position: { lat: 20.4209, lng: -86.9221 },
        map: map,
        icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
    });
}

