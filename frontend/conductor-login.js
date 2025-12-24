function login() {
  const id = document.getElementById("conductorId").value;
  const pass = document.getElementById("password").value;

  // DEMO credentials (hackathon safe)
  if (id === "PRTC1024" && pass === "safar123") {
    localStorage.setItem("userRole", "conductor");
    localStorage.setItem("conductorId", id);

    window.location.href = "conductor.html";
  } else {
    document.getElementById("errorMsg").innerText =
      "Invalid Conductor ID or Password";
  }
}
