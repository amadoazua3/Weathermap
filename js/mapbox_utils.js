// TODO: Create the map, add to #map
// Create the geocoder and add it how you see fit
// Set the process for creating/updating/removing markers and popups
// Create the callback to be used to pass coordinates along to weathermap-utils.js when the response from geocoder endpoint is SUCCESSFUL

mapboxgl.accessToken = MAPBOX_TOKEN;

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [-95.3698, 29.7604],
    zoom: 12
});

let marker;

mapEvent();

let geocoder = setGeocoder();
addGeocodeToMap(geocoder);

function setGeocoder(){

    // searchbox for map
      return new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl,
            marker: false
        });
}


function addGeocodeToMap(geocoder){

    map.addControl(geocoder);
    // display results when search
    geocoder.on('result', function (event) {

        console.log(event.result.place_name);

       setMarker(event.result.geometry.coordinates);
       marker.setPopup(displayPopup(event.result.place_name));

       fetchForecast(event.result.geometry.coordinates);

    });
}

function setMarker(point) {

    if(!marker){
        marker = new mapboxgl.Marker().setLngLat(point).addTo(map);
    } else {
        marker.setLngLat(point);
    }
}

function mapEvent() {

    map.on('click', function (event) {
        setMarker(event.lngLat);

        fetchForecast([event.lngLat.lng, event.lngLat.lat]);
    })
}

function displayPopup(textDetails){

    return new mapboxgl.Popup().setHTML(`<p>${textDetails}</p>`).addTo(map);
}