const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  const { id, password } = req.body;

  if (id === "conductor1" && password === "1234") {
    res.json({
      success: true,
      message: "Conductor logged in"
    });
  } else {
    res.status(401).json({
      success: false,
      message: "Invalid credentials"
    });
  }
});

module.exports = router;
