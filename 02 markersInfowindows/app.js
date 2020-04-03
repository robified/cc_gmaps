// Create a map variable
var map;
// Function to initialize the map within the map div
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 35.6586, lng: 139.7454 },
        zoom: 14
    });
    // Create a single latLng literal object.
    let tokyoTower = { lat: 35.6586, lng: 139.7454 };

    // TODO: Create a single marker appearing on initialize -
    // Create it with the position of the singleLatLng,
    // on the map, and give it your own title!
    let marker = new google.maps.Marker({
        position: tokyoTower,
        map: map,
        title: 'Tokyo Tower!'
    });

    // TODO: create a single infowindow, with your own content.
    // It must appear on the marker
    let infowindow = new google.maps.InfoWindow({
        content: 'Am I working now?'
    });

    // TODO: create an EVENT LISTENER so that the infowindow opens when
    // the marker is clicked!
    marker.addListener('click', () => infowindow.open(map, marker));
}
