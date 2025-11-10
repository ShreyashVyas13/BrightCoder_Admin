import express from "express";
import Blog from "../models/Blog.js";
import Tutorial from "../models/Tutorial.js";
import Inquiry from "../models/Inquiry.js"; // for feedback/inquiries

const router = express.Router();

// ✅ Admin stats route
router.get("/stats", async (req, res) => {
  try {
    const totalBlogs = await Blog.countDocuments();
    const totalTutorials = await Tutorial.countDocuments();
    const totalFeedbacks = await Inquiry.countDocuments();

    // 🧠 Since you use Clerk for auth, no local users
    res.json({
      totalBlogs,
      totalTutorials,
      totalFeedbacks,
    });
  } catch (err) {
    console.error("Error fetching dashboard stats:", err);
    res.status(500).json({ error: "Failed to fetch admin stats" });
  }
});

export default router;
