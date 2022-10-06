var map = L.map('map').setView([60.26652, 24.85157], 10);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var markerMyyrmaki = L.marker([60.26652, 24.85157]).addTo(map);

markerMyyrmaki.bindPopup("<b>Metropolia Myyrmäki</b><br>Myyrmäen Kampus");