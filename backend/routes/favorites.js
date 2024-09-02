const express = require("express");

const router = express.Router();

//GET favorites
router.get("/:id", (req, res) => {
  res.json({ msg: "Get favorites of a user" });
});

//ADD favorites
router.post("/:id", (req, res) => {
  res.json({ msg: "ADD favorites of a user" });
});

//REMOVE favorites
router.delete("/:id", (req, res) => {
  res.json({ msg: "REMOVE favorites of a user" });
});

module.exports = router;
