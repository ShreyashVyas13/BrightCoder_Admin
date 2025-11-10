// backend/routes/tutorialRoutes.js
// import express from "express";
// import Tutorial from "../models/Tutorial.js";

// const router = express.Router();

// // Get all tutorials
// router.get("/", async (req, res) => {
//   const tutorials = await Tutorial.find();
//   res.json(tutorials);
// });

// // Add new tutorial
// router.post("/", async (req, res) => {
//   const newTutorial = new Tutorial(req.body);
//   await newTutorial.save();
//   res.json(newTutorial);
// });

// // Delete tutorial
// router.delete("/:id", async (req, res) => {
//   await Tutorial.findByIdAndDelete(req.params.id);
//   res.json({ message: "Tutorial deleted" });
// });

// // Update tutorial
// router.put("/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     console.log("Updating:", id);

//     const updated = await Tutorial.findByIdAndUpdate(id, req.body, { new: true });

//     if (!updated) {
//       return res.status(404).json({ error: "Tutorial not found" });
//     }

//     res.json(updated);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // Get tutorial by link
// router.get("/link/:link", async (req, res) => {
//   try {
//     const tutorial = await Tutorial.findOne({ link: `/tutorial/${req.params.link}` });
//     if (!tutorial) return res.status(404).json({ error: "Tutorial not found" });
//     res.json(tutorial);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });



// export default router;


// import express from "express";
// import Tutorial from "../models/Tutorial.js";

// const router = express.Router();

// // Get all tutorials
// router.get("/", async (req, res) => {
//   const tutorials = await Tutorial.find();
//   res.json(tutorials);
// });

// // ➕ Get tutorial by ID (needed for Edit page)
// router.get("/:id", async (req, res) => {
//   try {
//     const tutorial = await Tutorial.findById(req.params.id);
//     if (!tutorial) {
//       return res.status(404).json({ error: "Tutorial not found" });
//     }
//     res.json(tutorial);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // Get tutorial by link
// router.get("/link/:link", async (req, res) => {
//   try {
//     const tutorial = await Tutorial.findOne({
//       link: `/tutorial/${req.params.link}`,
//     });
//     if (!tutorial) return res.status(404).json({ error: "Tutorial not found" });
//     res.json(tutorial);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // Add new tutorial
// router.post("/", async (req, res) => {
//   const newTutorial = new Tutorial(req.body);
//   await newTutorial.save();
//   res.json(newTutorial);
// });

// // Update tutorial
// router.put("/:id", async (req, res) => {
//   try {
//     const updated = await Tutorial.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//     });
//     if (!updated) {
//       return res.status(404).json({ error: "Tutorial not found" });
//     }
//     res.json(updated);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // Delete tutorial
// router.delete("/:id", async (req, res) => {
//   await Tutorial.findByIdAndDelete(req.params.id);
//   res.json({ message: "Tutorial deleted" });
// });

// export default router;

import express from "express";
import Tutorial from "../models/Tutorial.js";

const router = express.Router();

// ✅ Get all tutorials
router.get("/", async (req, res) => {
  try {
    const tutorials = await Tutorial.find();
    res.json(tutorials);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Get tutorial by ID
router.get("/:id", async (req, res) => {
  try {
    const tutorial = await Tutorial.findById(req.params.id);
    if (!tutorial) {
      return res.status(404).json({ error: "Tutorial not found" });
    }
    res.json(tutorial);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Get tutorial by link
router.get("/link/:link", async (req, res) => {
  try {
    const tutorial = await Tutorial.findOne({
      link: `/tutorial/${req.params.link}`,
    });
    if (!tutorial)
      return res.status(404).json({ error: "Tutorial not found" });
    res.json(tutorial);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Add new tutorial (with Base64 image)
router.post("/", async (req, res) => {
  try {
    const { title, desc, image, link, sections } = req.body;

    const newTutorial = new Tutorial({
      title,
      desc,
      image: image || "", // ✅ fallback empty string
      link,
      sections,
    });

    await newTutorial.save();
    res.json(newTutorial);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Update tutorial (with image)
router.put("/:id", async (req, res) => {
  try {
    const updated = await Tutorial.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          title: req.body.title,
          desc: req.body.desc,
          image: req.body.image || "", // ✅ allow updating image
          link: req.body.link,
          sections: req.body.sections,
        },
      },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ error: "Tutorial not found" });
    }

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Delete tutorial
router.delete("/:id", async (req, res) => {
  try {
    await Tutorial.findByIdAndDelete(req.params.id);
    res.json({ message: "Tutorial deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
  