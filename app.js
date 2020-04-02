// TODO: Create a map variable
let map;

// TODO: Complete the following function to initialize the map
function initMap() {
    // TODO: use a constructor to create a new map JS object. You can use the coordinates
    map = new google.maps.Map(document.getElementById('map'), {
        // coordinates for tokyo tower: 35.6586° N, 139.7454° E
        center: { lat: 35.6586, lng: 139.7454 },
        zoom: 13
    });

    // single point marker window
    // this is a marker instance
    let tokyoTower = { lat: 35.6586, lng: 139.7454 };
    let marker = new google.maps.Marker({
        position: tokyoTower,
        map: map,
        title: 'Tokyo Tower!'
    });
    // this is an info window
    let infowindow = new google.maps.InfoWindow({
        content:
            'Do you ever feel like an InforWindows, floating through the wind, ready to start again?'
    });
    marker.addListener('click', () => infowindow.open(map, marker));
}
