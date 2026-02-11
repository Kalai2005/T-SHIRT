const express = require("express");
const multer = require("multer");
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uploadsDir = path.join(__dirname, "uploads");
const designsDir = path.join(uploadsDir, "designs");
const previewsDir = path.join(uploadsDir, "previews");
const mockupsDir = path.join(__dirname, "mockups");

const upload = multer({
  dest: designsDir,
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
  const { product, color } = req.body;

  const mockupPath =
    product === "T-Shirt"
      ? `mockups/tshirt-${color.toLowerCase()}.png`
      : `mockups/hoodie-${color.toLowerCase()}.png`;

  const outputPath = `uploads/previews/preview-${Date.now()}.png`;

  await sharp(mockupPath)
    .composite([
      {
        input: req.file.path,
        top: 420,
        left: 350,
        blend: "multiply",
      },
    ])
    .toFile(outputPath);

  res.json({
    previewUrl: `http://localhost:5000/${outputPath}`,
  });
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
