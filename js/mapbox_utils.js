// TODO: Create the map, add to #map
// Create the geocoder and add it how you see fit
// Set the process for creating/updating/removing markers and popups
// Create the callback to be used to pass coordinates along to weathermap-utils.js when the response from geocoder endpoint is SUCCESSFUL

const mapboxToken = MAPBOX_TOKEN;

mapboxgl.accessToken = mapboxToken;

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [-95.3698, 29.7604],
    zoom: 12
});

// Add the control to the map.
map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })
);

let marker;

function addGeocoder(geocoder){


    // geocoder.on('result', function (event) {
    //
    // });

}



