const express = require("express");
const router = express.Router();
const users = [
  { id: 1, name: "Shin" },
  { id: 2, name: "Lee" },
  { id: 3, name: "Do" }
];

router.get("/", (req, res) => {
  res.send(users);
});

module.exports = router;
