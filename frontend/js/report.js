function submitReport() {
  const bus = document.getElementById("busNumber").value;
  const issue = document.getElementById("issueType").value;
  const details = document.getElementById("details").value;

  if (!bus) {
    alert("Please enter bus number");
    return;
  }

  // Demo / Simulation
  console.log("Report submitted:", {
    bus,
    issue,
    details,
    time: new Date().toISOString(),
  });

  document.getElementById("successMsg").innerText =
    "Report submitted successfully. Thank you for helping improve the service.";

  // Clear form
  document.getElementById("busNumber").value = "";
  document.getElementById("details").value = "";
}
