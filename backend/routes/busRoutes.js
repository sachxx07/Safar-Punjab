const express = require("express");
const router = express.Router();

const buses = [
  {
    id: 1,
    number: "PB10A1234",
    route: "Ludhiana → Amritsar",
    status: "On Time"
  },
  {
    id: 2,
    number: "PB08B5678",
    route: "Jalandhar → Chandigarh",
    status: "Delayed"
  }
];

router.get("/", (req, res) => {
  res.json(buses);
});

module.exports = router;
