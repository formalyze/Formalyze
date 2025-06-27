const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = 5000;

// ✅ MongoDB Atlas Connection
mongoose.connect(
  "mongodb+srv://infoformalyze:gmoPEQxRSPcA3ZsJ@formalyze.dv1jm3q.mongodb.net/formalyze?retryWrites=true&w=majority&appName=Formalyze"
)
.then(() => console.log("🟢 Connected to MongoDB Atlas"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ Middleware
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST"],
}));
app.use(express.json());

// ✅ Mongoose Schema & Model
const issueSchema = new mongoose.Schema({
  title: String,
  description: String,
});

const Issue = mongoose.model("Issue", issueSchema);

// ✅ Routes

// Test route
app.get("/", (req, res) => {
  res.send("✅ Server is up and running!");
});

// Save issue
app.post("/issue", async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({ message: "❌ Title and description required" });
  }

  try {
    const newIssue = new Issue({ title, description });
    await newIssue.save();
    res.json({ message: "✅ Issue saved to MongoDB!" });
  } catch (error) {
    console.error("❌ Error saving to DB:", error);
    res.status(500).json({ message: "❌ Failed to save issue" });
  }
});

// Optional: Get all issues
app.get("/issues", async (req, res) => {
  try {
    const issues = await Issue.find();
    res.json(issues);
  } catch (error) {
    res.status(500).json({ message: "❌ Could not fetch issues" });
  }
});

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
