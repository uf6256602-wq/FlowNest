// index.js
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Test route
app.get("/", (req, res) => {
  res.send("FlowNest Backend is running 🚀");
});

// Routes
const authRoutes = require("./routes/authroutes"); // 👈 make sure file ka naam yahi ho
const adminRoutes = require("./routes/admin");
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);

// MongoDB connect and start server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Atlas connected");

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error("❌ MongoDB error:", err));
