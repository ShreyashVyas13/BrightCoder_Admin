// backend/models/Tutorial.js
import mongoose from "mongoose";

const tutorialSchema = new mongoose.Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
 image: { type: String, required: true }, // ✅ Base64 image string (optional)
 link: { type: String, required: true },
  sections: [
    {
      title: String,       // "Introduction"
      content: String,     // description/content
    }
  ]
});

export default mongoose.model("Tutorial", tutorialSchema);
