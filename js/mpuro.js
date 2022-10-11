// Alustetaan kartta karttadiviin annetuilla alkuarvoilla.
var map = L.map('map').setView([60.22358, 25.07794], 10);

// Ladataan ja esitetään karttalaatat kartassa.
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Karttamarkkerin muuttuja myllpurolle annetuilla alkuarvoilla. Lopuksi lisätään karttaan.
var markerMyllypuro = L.marker([60.22358, 25.07794]).addTo(map);

// Markkerin popup ja sisältö kun markkeria painetaan.
markerMyllypuro.bindPopup("<b>Metropolia Myllypuro</b><br>Myllypurontie 1, 00920 Helsinki");