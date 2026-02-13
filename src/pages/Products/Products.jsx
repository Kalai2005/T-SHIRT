import { useState } from "react";
import productsData from "../../data/products";
import Filters from "../../components/Filters/Filters";
import SortBar from "../../components/SortBar/SortBar";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Products.css";

const Products = () => {
  const [sortBy, setSortBy] = useState("");
  const [showFilter, setShowFilter] = useState(false); // ✅ NEW

  const [tempFilters, setTempFilters] = useState({
    category: [],
    price: null,
    size: [],
    color: [],
    fabric: [],
    fit: [],
    sleeve: [],
    design: [],
    rating: null,
    discount: null,
  });

  const [appliedFilters, setAppliedFilters] = useState(tempFilters);

  const applyFilters = () => {
    setAppliedFilters(tempFilters);
    setShowFilter(false); // ✅ close filter after apply (UX)
  };

  const applySorting = (products) => {
    let sorted = [...products];

    switch (sortBy) {
      case "priceLowHigh":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "priceHighLow":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "popular":
        sorted.sort((a, b) => b.discount - a.discount);
        break;
      case "bestRated":
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return sorted;
  };
  
  

  const filteredProducts = productsData.filter(product => {
    if (
      appliedFilters.category.length > 0 &&
      !appliedFilters.category.includes(product.category)
    ) return false;

    if (
      appliedFilters.price &&
      (product.price < appliedFilters.price[0] ||
        product.price > appliedFilters.price[1])
    ) return false;

    if (
      appliedFilters.size.length > 0 &&
      !appliedFilters.size.some(size => product.sizes.includes(size))
    ) return false;

    if (
      appliedFilters.color.length > 0 &&
      !appliedFilters.color.some(color => product.colors.includes(color))
    ) return false;

    if (
      appliedFilters.fabric.length > 0 &&
      !appliedFilters.fabric.includes(product.fabric)
    ) return false;

    if (
      appliedFilters.fit.length > 0 &&
      !appliedFilters.fit.includes(product.fit)
    ) return false;

    if (
      appliedFilters.sleeve.length > 0 &&
      !appliedFilters.sleeve.includes(product.sleeve)
    ) return false;

    if (
      appliedFilters.design.length > 0 &&
      !appliedFilters.design.includes(product.design)
    ) return false;

    if (
      appliedFilters.rating &&
      product.rating < appliedFilters.rating
    ) return false;

    if (
      appliedFilters.discount &&
      product.discount < appliedFilters.discount
    ) return false;

    return true;
  });

  return (
    <>
      {/* TOP BAR */}
      <div className="products-topbar">
        <button
          className="filter-toggle-btn"
          onClick={() => setShowFilter(prev => !prev)}
        >
          Filter
        </button>

        <SortBar sortBy={sortBy} setSortBy={setSortBy} />
      </div>

      {/* MAIN LAYOUT */}
      <div className="products-page">
        {showFilter && (
          <Filters
            filters={tempFilters}
            setFilters={setTempFilters}
            onApply={applyFilters}
          />
        )}

        <div className="right-section">
          <div className="products-grid">
            {applySorting(filteredProducts).map(item => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
