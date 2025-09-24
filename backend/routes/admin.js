const express = require("express");
const User = require("../models/user");
const { authMiddleware, adminMiddleware } = require("../middleware/auth");

const router = express.Router();

// Get all users (admin only)
router.get("/users", adminMiddleware, async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Get stats (admin only)
router.get("/stats", adminMiddleware, async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const activeUsers = await User.countDocuments({ status: "active" });
    res.json({ totalUsers, activeUsers });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Update user status (admin only)
router.put("/users/:id", adminMiddleware, async (req, res) => {
  try {
    const { status } = req.body;
    const user = await User.findByIdAndUpdate(req.params.id, { status }, { new: true });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
