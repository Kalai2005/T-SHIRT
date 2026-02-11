import './SortBar.css';

const SortBar = ({ sortBy, setSortBy }) => {
  return (
    <div className="sort-container">
      <select
        className="sort-select"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="">🔃 Sort By</option>
        <option value="priceLowHigh">Price: Low → High</option>
        <option value="priceHighLow">Price: High → Low</option>
        <option value="popular">Popular</option>
        <option value="bestRated">Best Rated</option>
      </select>

      {sortBy && (
        <span className="sort-active">
          Sorted by: {sortBy.replace(/([A-Z])/g, " $1")}
        </span>
      )}
    </div>
  );
};

export default SortBar;
