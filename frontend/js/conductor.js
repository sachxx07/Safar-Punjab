// 🔐 Role protection (must run first)
const role = localStorage.getItem("userRole");

if (role !== "conductor") {
  alert("Access denied. Conductor login required.");
  window.location.href = "conductor-login.html";
}

// Simulated login role (for demo)
const userRole = "conductor"; // change to "passenger" to test

if (userRole !== "conductor") {
  alert("Access denied. Conductor only.");
  window.location.href = "index.html";
}

let tripStarted = false;

function startTrip() {
  tripStarted = true;
  document.getElementById("tripStatus").innerText = "Running";
  logUpdate("Trip started");

  // Start GPS tracking
  startLocationTracking();
}

function updateStatus(status) {
  if (!tripStarted) {
    alert("Start the trip first");
    return;
  }

  logUpdate("Status updated: " + status);
}

function logUpdate(message) {
  const time = new Date().toLocaleTimeString();
  document.getElementById("log").innerText =
    "Last update (" + time + "): " + message;
}

/* GPS Tracking (Simulation / Browser GPS) */
function startLocationTracking() {
  if (!navigator.geolocation) {
    alert("GPS not supported");
    return;
  }

  navigator.geolocation.watchPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      console.log("GPS:", lat, lng);
      // Later: send to backend API
    },
    () => {
      alert("Unable to fetch location");
    },
    { enableHighAccuracy: true }
  );
}
