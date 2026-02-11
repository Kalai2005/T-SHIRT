import { useState } from "react";
import "./Customize.css";

const Customize = () => {
  const [product, setProduct] = useState("T-Shirt");
  const [sleeve, setSleeve] = useState("Half Sleeve");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [notes, setNotes] = useState("");

  const [uploadType, setUploadType] = useState("single");
  const [images, setImages] = useState([]);

  // Upload handler
  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImages([{ file, url: URL.createObjectURL(file) }]);
  };

 
  const sendWhatsApp = () => {
    if (!images.length || !color || !size) {
      alert("Please upload design, select color & size");
      return;
    }

    const message = `
Hello 👋

This is a customization request from *M-Shan Outlets* 👕✨

🔹 Product: ${product}
${product === "T-Shirt" ? `🔹 Sleeve Type: ${sleeve}` : ""}
🔹 Color: ${color}
🔹 Size: ${size}

🎨 Design Type: ${uploadType === "single" ? "Single Design" : "Multiple Designs"}
📎 Uploaded design attached

📝 Print Notes:
${notes || "No special instructions"}

🌐 Website:
https://www.M-Shan Outlets.com

Please share price, print details & delivery info.
Thank you 🙏
  `;

    const phone = "919894588717"; 

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="customize-wrapper">

     
      <div className="customize-left">

        <h3 className="upload-title">Upload Your Design</h3>
        <p className="upload-sub">
          Drag & drop your design here or click to browse
        </p>

        
        <div className="upload-type">
          <label>
            <input
              type="radio"
              checked={uploadType === "single"}
              onChange={() => {
                setUploadType("single");
                setImages([]);
              }}
            />
            Single Design
          </label>

          <label>
            <input
              type="radio"
              checked={uploadType === "multiple"}
              onChange={() => {
                setUploadType("multiple");
                setImages([]);
              }}
            />
            Multiple Designs
          </label>
        </div>

       
        <div className="upload-box-pro">
          <input type="file" accept="image/*" onChange={handleUpload} />

          {!images.length ? (
            <div className="upload-placeholder">
              <div className="upload-icon">⬆</div>
              <h4>Drop your design here</h4>
              <p>PNG / JPG • Best for print quality</p>
            </div>
          ) : (
            <img src={images[0].url} alt="design preview" />
          )}
        </div>

      </div>

      
      <div className="customize-right">
        <h2>Customize Your T-Shirt / Hoodie</h2>

        <div className="section">
          <h4>Choose Product</h4>
          <button
            className={product === "T-Shirt" ? "active" : ""}
            onClick={() => setProduct("T-Shirt")}
          >
            T-Shirt
          </button>
          <button
            className={product === "Hoodie" ? "active" : ""}
            onClick={() => setProduct("Hoodie")}
          >
            Hoodie
          </button>
        </div>

        {product === "T-Shirt" && (
          <div className="section">
            <h4>Sleeve Type</h4>
            <button
              className={sleeve === "Half Sleeve" ? "active" : ""}
              onClick={() => setSleeve("Half Sleeve")}
            >
              Half Sleeve
            </button>
            <button
              className={sleeve === "Full Sleeve" ? "active" : ""}
              onClick={() => setSleeve("Full Sleeve")}
            >
              Full Sleeve
            </button>
          </div>
        )}

        <div className="section">
          <h4>Select Color</h4>
          {["White", "Black", "Grey", "Navy"].map((c) => (
            <button
              key={c}
              className={color === c ? "active" : ""}
              onClick={() => setColor(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="section">
          <h4>Select Size</h4>
          {["S", "M", "L", "XL", "XXL"].map((s) => (
            <button
              key={s}
              className={size === s ? "active" : ""}
              onClick={() => setSize(s)}
            >
              {s}
            </button>
          ))}
        </div>

        <div className="section">
          <h4>Notes for Print</h4>
          <textarea
            placeholder="Front center print, white ink..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>

        <button className="whatsapp-btn" onClick={sendWhatsApp}>
          📲 Send Design via WhatsApp
        </button>
      </div>

    </div>
  );
};

export default Customize;
