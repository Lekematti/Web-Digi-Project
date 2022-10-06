var map = L.map('map').setView([60.22407, 24.75854], 10);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var markerKaramalmi = L.marker([60.22407, 24.75854]).addTo(map);
var markerMyyrmaki = L.marker([60.26652, 24.85157]).addTo(map);
var markerMyllypuro = L.marker([60.22358, 25.07794]).addTo(map);

/*var circle = L.circle([60.22407, 24.75854], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);*/

//markerKaramalmi.bindPopup("<b>Metropolia Karamalmi</b><br>Nokia Kampus").openPopup();
//markerMyyrmaki.bindPopup("<b>Metropolia Myyrmäki</b><br>Myyrmäen Kampus").openPopup();
//markerMyllypuro.bindPopup("<b>Metropolia Myllypuro</b><br>Myllypuron Kampus").openPopup();
//circle.bindPopup("I am a circle.");



function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);
