const express = require("express");
const multer = require("multer");
const sharp = require("sharp");
const path = require("path");
const cors = require("cors");
const functions = require("firebase-functions");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uploadsDir = path.join(__dirname, "uploads");
const designsDir = path.join(uploadsDir, "designs");
const previewsDir = path.join(uploadsDir, "previews");
const mockupsDir = path.join(__dirname, "mockups");

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 8 * 1024 * 1024,
  },
});

const getMockupPath = (product, color) => {
  const p = (product || "T-Shirt").toLowerCase();
  const c = (color || "white").toLowerCase();

  if (p.includes("hoodie")) {
    return c === "black"
      ? path.join(mockupsDir, "hoodie-black.png")
      : path.join(mockupsDir, "hoodie-white.png");
  }

  return c === "black"
    ? path.join(mockupsDir, "tshirt-black.png")
    : path.join(mockupsDir, "tshirt-white.png");
};

app.use("/uploads", express.static("uploads"));

app.post("/api/print-preview", upload.single("design"), async (req, res) => {
  try {
    const { product, color } = req.body;

    if (!req.file) {
      return res.status(400).json({ error: "No design file uploaded." });
    }

    const mockupPath = getMockupPath(product, color);

    const composed = await sharp(mockupPath)
      .composite([
        {
          input: req.file.buffer,
          top: 420,
          left: 350,
          blend: "multiply",
        },
      ])
      .png()
      .toBuffer();

    return res.json({
      previewUrl: `data:image/png;base64,${composed.toString("base64")}`,
    });
  } catch (error) {
    console.error("print-preview error:", error);
    return res.status(500).json({ error: "Failed to generate preview." });
  }
});

exports.api = functions.https.onRequest(app);

if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
  });
}
