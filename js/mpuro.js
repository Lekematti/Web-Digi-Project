var map = L.map('map').setView([60.22358, 25.07794], 10);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var markerMyllypuro = L.marker([60.22358, 25.07794]).addTo(map);

markerMyllypuro.bindPopup("<b>Metropolia Myllypuro</b><br>Myllypurontie 1, 00920 Helsinki");