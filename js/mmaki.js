// Alustetaan kartta karttadiviin annetuilla alkuarvoilla.
var map = L.map('map').setView([60.26652, 24.85157], 10);

// Ladataan ja esitetään karttalaatat kartassa.
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Karttamarkkerin muuttuja Myyrmäelle annetuilla alkuarvoilla. Lopuksi lisätään karttaan.
var markerMyyrmaki = L.marker([60.26652, 24.85157]).addTo(map);

// Markkerin popup ja sisältö kun markkeria painetaan.
markerMyyrmaki.bindPopup("<b>Metropolia Myyrmäki</b><br>Leiritie 1, 01600 Vantaa");