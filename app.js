// TODO: Create a map variable
let map;

// TODO: Complete the following function to initialize the map
function initMap() {
    // TODO: use a constructor to create a new map JS object. You can use the coordinates
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 35.6586, lng: 139.7454 },
        zoom: 13
    });
    // coordinates for tokyo tower: 35.6586° N, 139.7454° E
}
