const express = require("express");
const upload = require("../middleware/uploadMiddleware");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/resume", protect, upload.single("file"), (req, res) => {
  res.json({ url: req.file.path });
});

router.post("/logo", protect, upload.single("file"), (req, res) => {
  res.json({ url: req.file.path });
});

module.exports = router;
