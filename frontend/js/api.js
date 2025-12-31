// ===============================
// BASE URL (Backend)
// ===============================
const BASE_URL = "http://localhost:5000";


// ===============================
// 1️⃣ FETCH & SHOW BUSES (Homepage)
// ===============================
async function getBuses() {
  try {
    const response = await fetch(`${BASE_URL}/api/buses`);
    const buses = await response.json();

    const busList = document.getElementById("bus-list");
    if (!busList) return; // safety check

    busList.innerHTML = "";

    buses.forEach(bus => {
      const busCard = document.createElement("div");
      busCard.className = "bus-card";

      busCard.innerHTML = `
        <h3>Bus Number: ${bus.number}</h3>
        <p><strong>Route:</strong> ${bus.route}</p>
        <p><strong>Status:</strong> ${bus.status}</p>
      `;

      busList.appendChild(busCard);
    });

  } catch (error) {
    console.error("Error fetching buses:", error);
  }
}


// ===============================
// 2️⃣ CONDUCTOR LOGIN
// ===============================
async function loginConductor() {
  const id = document.getElementById("conductorId").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("login-message");

  if (!id || !password) {
    message.style.color = "red";
    message.innerText = "Please enter ID and password";
    return;
  }

  try {
    const response = await fetch(`${BASE_URL}/api/conductor/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id, password })
    });

    const data = await response.json();

    if (data.success) {
      message.style.color = "green";
      message.innerText = "Login successful!";
      // Optional redirect
      // window.location.href = "conductor.html";
    } else {
      message.style.color = "red";
      message.innerText = data.message || "Login failed";
    }

  } catch (error) {
    message.style.color = "red";
    message.innerText = "Server error";
    console.error(error);
  }
}
// ===============================
// 3️⃣ REPORT ISSUE (Passenger)
// ===============================
const BASE_URL = "http://localhost:5000";

async function submitReport() {
  const busNumber = document.getElementById("busNumber").value;
  const issue = document.getElementById("issue").value;
  const message = document.getElementById("report-message");

  if (!busNumber || !issue) {
    message.style.color = "red";
    message.innerText = "Please fill all fields";
    return;
  }

  try {
    const response = await fetch(`${BASE_URL}/api/report`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ busNumber, issue })
    });

    const data = await response.json();

    if (data.success) {
      message.style.color = "green";
      message.innerText = "Report submitted successfully!";
      document.getElementById("busNumber").value = "";
      document.getElementById("issue").value = "";
    } else {
      message.style.color = "red";
      message.innerText = data.message || "Error submitting report";
    }
  } catch (error) {
    message.style.color = "red";
    message.innerText = "Server error";
  }
}


