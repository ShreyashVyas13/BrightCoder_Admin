// // backend/server.js
// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import dotenv from "dotenv";
// import tutorialRoutes from "./routes/tutorialRoutes.js";
// import blogRoutes from "./routes/blogRoutes.js";
// import inquiryRoutes from "./routes/inquiryRoutes.js";
// import adminRoutes from "./routes/adminRoutes.js";


// const app = express();
// // ✅ Allow large JSON bodies (up to 20MB)
// app.use(express.json({ limit: "20mb" }));
// app.use(express.urlencoded({ extended: true, limit: "20mb" }));
// app.use(cors());
// app.use(express.json());

// dotenv.config(); // ✅ Must be before using process.env
// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("✅ MongoDB Connected Successfully"))
//   .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// app.use("/api/tutorials", tutorialRoutes);
// app.use("/api/blogs", blogRoutes);
// app.use("/api/inquiries", inquiryRoutes);
// app.use("/api/admin", adminRoutes);

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

// app.use("/api/tutorials", tutorialRoutes);
// // console.log("Updating:", `/tutorials/${id}`);


// backend/server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import tutorialRoutes from "./routes/tutorialRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import inquiryRoutes from "./routes/inquiryRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

dotenv.config(); // ✅ Must come before using process.env

const app = express();

// ✅ Allow large JSON bodies (up to 20MB)
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ extended: true, limit: "20mb" }));
app.use(cors());
app.use(express.json());

// ✅ Debug log to verify .env is working (you can remove later)
console.log("🔍 MONGO_URI from .env:", process.env.MONGO_URI);

// ✅ Connect to MongoDB Atlas
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

app.use("/api/tutorials", tutorialRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/inquiries", inquiryRoutes);
app.use("/api/admin", adminRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

app.use("/api/tutorials", tutorialRoutes);
// console.log("Updating:", `/tutorials/${id}`);
