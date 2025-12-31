const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { busNumber, issue } = req.body;

  if (!busNumber || !issue) {
    return res.status(400).json({
      success: false,
      message: "Bus number and issue are required"
    });
  }

  // Dummy success response (no DB needed)
  res.json({
    success: true,
    message: "Report submitted successfully"
  });
});

module.exports = router;


