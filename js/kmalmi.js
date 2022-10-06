var map = L.map('map').setView([60.22407, 24.75854], 10);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var markerKaramalmi = L.marker([60.22407, 24.75854]).addTo(map);

markerKaramalmi.bindPopup("<b>Metropolia Karamalmi</b><br>Nokia Kampus");