const cors = require("cors");
app.use(cors());
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const busRoutes = require("./routes/busRoutes");
const conductorRoutes = require("./routes/conductorRoutes");
const reportRoutes = require("./routes/reportRoutes");

// Use routes
app.use("/api/buses", busRoutes);
app.use("/api/conductor", conductorRoutes);
app.use("/api/reports", reportRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Safar Punjab Backend is running 🚍");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
