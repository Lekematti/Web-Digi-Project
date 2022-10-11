// Alustetaan kartta karttadiviin annetuilla alkuarvoilla.
var map = L.map('map').setView([60.22407, 24.75854], 10);

// Ladataan ja esitetään karttalaatat kartassa.
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Karttamarkkerin muuttuja Karamalmille annetuilla alkuarvoilla. Lopuksi lisätään karttaan.
var markerKaramalmi = L.marker([60.22407, 24.75854]).addTo(map);

// Markkerin popup ja sisältö kun markkeria painetaan.
markerKaramalmi.bindPopup("<b>Metropolia Karamalmi</b><br>Karaportti 2, 02610 Espoo");