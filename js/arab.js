var map = L.map('map').setView([60.21005, 24.97682], 10);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var markerArabia = L.marker([60.21005, 24.97682]).addTo(map);

markerArabia.bindPopup("<b>Metropolia Arabia</b><br>Hämeentie 135 D, 00560 Helsinki");