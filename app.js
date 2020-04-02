// TODO: Create a map variable
let map;

// create a new blank array for all the listing markers.
const markers = [];

// TODO: Complete the following function to initialize the map
function initMap() {
    // TODO: use a constructor to create a new map JS object. You can use the coordinates
    map = new google.maps.Map(document.getElementById('map'), {
        // coordinates for tokyo tower: 35.6586° N, 139.7454° E
        center: { lat: 35.6586, lng: 139.7454 },
        zoom: 13
    });

    //
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
    //

    //
    // These are are bunch of rando places that will be shown to the user
    // Normally, these would be in a database
    const locations = [
        {
            title: 'International House of Japan',
            location: { lat: 35.6585, lng: 139.7334 }
        },
        {
            title: 'New Pier Hall',
            location: { lat: 35.6556, lng: 139.7636 }
        }
    ];

    let largeInfowindow = new google.maps.InfoWindow();
    let bounds = new google.maps.LatLngBounds();
    // this uses the locations array to create an array of markers on initialize
    for (let i = 0; i < locations.length; i++) {
        let position = locations[i].location;
        let title = locations[i].title;
        // create a market per location, and put in markers array
        let marker = new google.maps.Marker({
            map: map,
            position: position,
            title: title,
            animation: google.maps.Animation.DROP,
            id: i
        });
        // push the marker to our array of markers
        markers.push(marker);
        // extend the boundaries of the map for each marker
        bounds.extend(marker.position);
        // create an onClick event to open an infowindow at each marker
        marker.addListener('click', function() {
            populateInfoWindow(this, largeInfowindow);
        });
        map.fitBounds(bounds);
    }
    // this function populates the infowindow when the marker is clicked. We'll only allow one infowindow which will open at the marker that is clicked, and populate based on that markers position
    function populateInfoWindow(marker, infowindow) {
        // check to make sure the infowindow is not already opened on this marker
        if (infowindow.marker != markers) {
            infowindow.marker = marker;
            infowindow.setContent('<div>' + marker.title + '</div>');
            infowindow.open(map, marker);
            // make sure the marker property is cleared if the infowindow is closed
            infowindow.addListener('closeclick', function() {
                infowindow.setMarker(null);
            });
        }
    }
}
