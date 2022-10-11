// Alustetaan kartta karttadiviin annetuilla alkuarvoilla.
var map = L.map('map').setView([60.21005, 24.97682], 10);

// Ladataan ja esitetään karttalaatat kartassa.
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Karttamarkkerin muuttuja Arabialle annetuilla alkuarvoilla. Lopuksi lisätään karttaan.
var markerArabia = L.marker([60.21005, 24.97682]).addTo(map);

// Markkerin popup ja sisältö kun markkeria painetaan.
markerArabia.bindPopup("<b>Metropolia Arabia</b><br>Hämeentie 135 D, 00560 Helsinki");