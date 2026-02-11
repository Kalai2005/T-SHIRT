import "./Filters.css";

const Filters = ({ filters, setFilters, onApply }) => {
  const toggle = (type, value) => {
    setFilters(prev => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter(v => v !== value)
        : [...prev[type], value]
    }));
  };

  const setRadio = (type, value) => {
    setFilters(prev => ({ ...prev, [type]: value }));
  };

  return (
    <aside className="filters-panel">

      <h2 className="filters-title">Filters</h2>

      <div className="filter-block">
        <h4>Category</h4>
        <label className="filter-item">
          <input type="checkbox" onChange={() => toggle("category", "T-Shirt")} /> <span>T-Shirt</span>
        </label>
        <label className="filter-item">
          <input type="checkbox" onChange={() => toggle("category", "Hoodie")} /> <span>Hoodie</span>
        </label>
      </div>


      <div className="filter-block">
        <h4>Price Range</h4>
        <label className="filter-item">
          <input type="radio" name="price" onChange={() => setRadio("price", [300, 500])} /> <span>₹300 – ₹500</span>
        </label>
        <label className="filter-item">
          <input type="radio" name="price" onChange={() => setRadio("price", [500, 1000])} /> <span>₹500 – ₹1000</span>
        </label>
      </div>

      
      <div className="filter-block">
        <h4>Size</h4>
        <label className="filter-item">
          <input type="checkbox" onChange={() => toggle("size", "S")} /> S
        </label>
        <label className="filter-item">
          <input type="checkbox" onChange={() => toggle("size", "M")} /> M
        </label>
        <label className="filter-item">
          <input type="checkbox" onChange={() => toggle("size", "L")} /> L
        </label>
        <label className="filter-item">
          <input type="checkbox" onChange={() => toggle("size", "XL")} /> XL
        </label>
      </div>

      
      <div className="filter-block">
        <h4>Color</h4>
        <label className="filter-item"><input type="checkbox" onChange={() => toggle("color", "White")} /> White</label>
        <label className="filter-item"><input type="checkbox" onChange={() => toggle("color", "Black")} /> Black</label>
        <label className="filter-item"><input type="checkbox" onChange={() => toggle("color", "Grey")} /> Grey</label>
      </div>

      
      <div className="filter-block">
        <h4>Fabric</h4>
        <label className="filter-item">
          <input type="checkbox" onChange={() => toggle("fabric","Cotton")} /> Cotton
        </label>
        <label className="filter-item">
          <input type="checkbox" onChange={() => toggle("fabric","Poly Cotton")} /> Poly Cotton
        </label>
        <label className="filter-item">
          <input type="checkbox" onChange={() => toggle("fabric","Fleece")} /> Fleece
        </label>
      </div>

      
      <div className="filter-block">
        <h4>Fit Type</h4>
        <label className="filter-item">
          <input type="checkbox" onChange={() => toggle("fit","Regular")} /> Regular
        </label>
        <label className="filter-item">
          <input type="checkbox" onChange={() => toggle("fit","Oversized")} /> Oversized
        </label>
      </div>

      
      <div className="filter-block">
        <h4>Sleeve Type</h4>
        <label className="filter-item">
          <input type="checkbox" onChange={() => toggle("sleeve","Half Sleeve")} /> Half Sleeve
        </label>
        <label className="filter-item">
          <input type="checkbox" onChange={() => toggle("sleeve","Full Sleeve")} /> Full Sleeve
        </label>
      </div>

      
      <div className="filter-block">
        <h4>Design</h4>
        <label className="filter-item">
          <input type="checkbox" onChange={() => toggle("design","Plain")} /> Plain
        </label>
        <label className="filter-item">
          <input type="checkbox" onChange={() => toggle("design","Printed")} /> Printed
        </label>
        <label className="filter-item">
          <input type="checkbox" onChange={() => toggle("design","Graphic")} /> Graphic
        </label>
      </div>

      
      <div className="filter-block">
        <h4>Rating</h4>
        <label className="filter-item">
          <input type="radio" name="rating" onChange={() => setRadio("rating", 4)} /> ⭐ 4 & above
        </label>
        <label className="filter-item">
          <input type="radio" name="rating" onChange={() => setRadio("rating", 3)} /> ⭐ 3 & above
        </label>
      </div>

      
      <div className="filter-block">
        <h4>Discount</h4>
        <label className="filter-item">
          <input type="radio" name="discount"
            onChange={() => setRadio("discount",10)} /> 10% & above
        </label>
        <label className="filter-item">
          <input type="radio" name="discount"
            onChange={() => setRadio("discount",30)} /> 30% & above
        </label>
      </div>

      <button className="apply-btn" onClick={onApply}>
        Apply Filters
      </button>

    </aside>
  );
};

export default Filters;
