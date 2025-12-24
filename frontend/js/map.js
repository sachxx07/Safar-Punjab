// Initialize Map
const map = L.map("map").setView([31.3260, 75.5762], 9);

// OpenStreetMap tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors",
}).addTo(map);

// Route coordinates (Jalandhar → Ludhiana)
const routeCoords = [
  [31.3260, 75.5762],
  [31.1471, 75.3412],
  [30.9000, 75.8573],
];

// Draw route
const routeLine = L.polyline(routeCoords, {
  color: "#0b4da2",
  weight: 5,
}).addTo(map);

map.fitBounds(routeLine.getBounds());

// Bus Marker
let busIndex = 0;
const busIcon = L.icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/61/61209.png",
  iconSize: [35, 35],
});

const busMarker = L.marker(routeCoords[0], {
  icon: busIcon,
}).addTo(map);

// Simulate bus movement
setInterval(() => {
  busIndex++;

  if (busIndex >= routeCoords.length) {
    busIndex = 0;
  }

  busMarker.setLatLng(routeCoords[busIndex]);
}, 4000);
